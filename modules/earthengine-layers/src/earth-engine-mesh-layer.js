/* global createImageBitmap */
import {CompositeLayer} from '@deck.gl/core';
import {TileLayer, TerrainLayer} from '@deck.gl/geo-layers';
import ee from '@google/earthengine';
import {initializeEEApi} from './ee-api'; // Promisify ee apis
import {load} from '@loaders.gl/core';
import {ImageLoader} from '@loaders.gl/images';
import {deepEqual, promisifyEEMethod} from './utils';

/**
 * Decoder for AWS Terrain Tiles
 */
export const ELEVATION_DECODER = {
  rScaler: 256,
  gScaler: 1,
  bScaler: 1 / 256,
  offset: -32768
};

// Global access token, to allow single EE API initialization if using multiple
// layers
let accessToken;

const defaultProps = {
  ...TileLayer.defaultProps,
  // data prop is unused
  data: {type: 'object', value: null},
  token: {type: 'string', value: null},
  eeObject: {type: 'object', value: null},
  eeMeshObject: {type: 'object', value: null},
  visParams: {type: 'object', value: null, equal: deepEqual},
  // Force animation; animation is on by default when ImageCollection passed
  animate: false,
  // Frames per second
  animationSpeed: 12,
  refinementStrategy: 'no-overlap'
};

export default class EarthEngineMeshLayer extends CompositeLayer {
  // helper function to initialize EE API
  static async initializeEEApi({clientId, token}) {
    await initializeEEApi({clientId, token});
  }

  initializeState() {
    this.state = {};
  }

  // Note - Layer.updateState is not async. But it lets us `await` the initialization below
  async updateState({props, oldProps, changeFlags}) {
    await this._updateToken(props, oldProps, changeFlags);
    this._updateEEObject(props, oldProps, changeFlags);
    await this._updateEEVisParams(props, oldProps, changeFlags);
    this._animate();
  }

  async _updateToken(props, oldProps, changeFlags) {
    if (!props.token || props.token === accessToken) {
      return;
    }

    const {token} = props;
    await eeApi.initialize({token});
    accessToken = token;
  }

  _animate() {
    // unit corresponds to the timestamp in source data
    const {nFrames} = this.state;
    if (!nFrames) {
      return;
    }

    // unit time per second
    const {animationSpeed} = this.props;
    const timestamp = Date.now() / 1000;
    const loopTime = nFrames / animationSpeed;

    this.setState({
      frame: Math.floor(((timestamp % loopTime) / loopTime) * nFrames)
    });
  }

  _updateEEObject(props, oldProps, changeFlags) {
    if (props.eeObject === oldProps.eeObject && props.eeMeshObject === oldProps.eeMeshObject) {
      return;
    }

    let eeObject;
    let eeMeshObject;
    // If a string, assume a JSON-serialized EE object.
    if (typeof props.eeObject === 'string') {
      eeObject = ee.Deserializer.fromJSON(props.eeObject);
    } else {
      eeObject = props.eeObject;
    }
    if (typeof props.eeMeshObject === 'string') {
      eeMeshObject = ee.Deserializer.fromJSON(props.eeMeshObject);
    } else {
      eeMeshObject = props.eeMeshObject;
    }

    if (eeMeshObject) {
      // Quantize eeMeshObject
      const added = eeMeshObject.add(32768);
      const red = added.divide(256).floor();
      const green = added.mod(256).floor();
      const blue = added
        .subtract(added.floor())
        .multiply(255)
        .floor();
      eeMeshObject = ee.Image.rgb(red, green, blue);
    }

    if (eeObject && props.animate) {
      // Force to be ee.ImageCollection. Sometimes deserializes as
      // FeatureCollection
      eeObject = ee.ImageCollection(eeObject);
    }

    // TODO - what case is this handling
    if (Array.isArray(props.eeObject) && props.eeObject.length === 0) {
      eeObject = null;
    }

    this.setState({eeObject, eeMeshObject});
  }

  async _updateEEVisParams(props, oldProps, changeFlags) {
    if (
      props.visParams === oldProps.visParams &&
      props.eeObject === oldProps.eeObject &&
      props.eeMeshObject === oldProps.eeMeshObject
    ) {
      return;
    }
    const {animate} = props;

    const {eeObject, eeMeshObject} = this.state;
    if (!eeObject) {
      return;
    }

    if (!eeObject.getMap) {
      throw new Error('eeObject must have a getMap() method');
    }

    let renderMethod;
    if (animate) {
      renderMethod = 'filmstrip';
      if (!eeObject.getFilmstripThumbURL) {
        throw new Error('eeObject must have a getFilmstripThumbURL method to animate.');
      }
    } else {
      renderMethod = 'imageTiles';
    }

    // Evaluate map
    // Done for all eeObjects, including ImageCollection, to get a stable
    // identifier
    const {mapid, urlFormat} = await promisifyEEMethod(eeObject, 'getMap', props.visParams);

    const {mapid: meshMapid, urlFormat: meshUrlFormat} = await promisifyEEMethod(
      eeMeshObject,
      'getMap',
      {
        min: 0,
        max: 255,
        format: 'png'
      }
    );

    this.setState({mapid, urlFormat, meshMapid, meshUrlFormat, renderMethod});
  }

  getTileData(options) {
    const {renderMethod} = this.state;
    if (renderMethod === 'filmstrip') {
      return this.getFilmstripTileData(options);
    }

    return this.getImageTileData(options);
  }

  async getImageTileData({x, y, z}) {
    const {urlFormat} = this.state;
    if (!urlFormat) {
      return null;
    }

    const imageUrl = urlFormat
      .replace('{x}', x)
      .replace('{y}', y)
      .replace('{z}', z);

    const image = await load(imageUrl, ImageLoader);
    // Return Array for compatible API with getFilmstripTileData
    return Promise.all([image]);
  }

  async getFilmstripTileData({bbox}) {
    const {eeObject} = this.state;
    const {visParams} = this.props;
    const {west, north, east, south} = bbox;
    const TILE_SIZE = 256;

    // Set geodesic=false to prevent horizontal lines from projection issues
    const region = ee.Geometry.Rectangle([west, south, east, north], 'EPSG:4326', false);
    const filmArgs = {
      ...visParams,
      dimensions: [TILE_SIZE, TILE_SIZE],
      region,
      crs: 'EPSG:3857'
    };
    const imageUrl = await promisifyEEMethod(eeObject, 'getFilmstripThumbURL', filmArgs);

    const imageOptions = {image: {type: 'imagebitmap'}};
    const image = await load(imageUrl, ImageLoader, imageOptions);
    const nFrames = image.height / TILE_SIZE;

    const slices = [];
    for (let i = 0; i < nFrames; i++) {
      const imageBounds = [0, i * TILE_SIZE, TILE_SIZE, TILE_SIZE];
      slices.push(createImageBitmap(image, ...imageBounds));
    }

    this.setState({nFrames});
    return Promise.all(slices);
  }

  renderLayers() {
    const {mapid, urlFormat, meshMapid, meshUrlFormat} = this.state;

    return (
      mapid &&
      meshMapid &&
      new TerrainLayer(
        this.getSubLayerProps({
          id: mapid
        }),
        {
          elevationData: meshUrlFormat,
          texture: urlFormat,
          elevationDecoder: ELEVATION_DECODER,
          meshMaxError: 10
        }
      )
    );
  }
}

EarthEngineMeshLayer.layerName = 'EarthEngineMeshLayer';
EarthEngineMeshLayer.defaultProps = defaultProps;
