/* global createImageBitmap */
import {CompositeLayer} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';
import EEApi from './ee-api'; // Promisify ee apis
import ee from '@google/earthengine';
import {load} from '@loaders.gl/core';
import {ImageLoader} from '@loaders.gl/images';
import {deepEqual, promisifyEEMethod} from './utils';

const eeApi = new EEApi();
// Global access token, to allow single EE API initialization if using multiple
// layers
let accessToken;

const defaultProps = {
  ...TileLayer.defaultProps,
  // data prop is unused
  data: {type: 'object', value: null},
  token: {type: 'string', value: null},
  eeObject: {type: 'object', value: null},
  visParams: {type: 'object', value: null, equal: deepEqual},
  refinementStrategy: 'no-overlap'
};

export default class EarthEngineLayer extends CompositeLayer {
  initializeState() {
    this.state = {};
  }

  _animate() {
    // unit corresponds to the timestamp in source data
    const {nFrames} = this.state;
    if (!nFrames) {
      return;
    }

    // unit time per second
    const {animationSpeed = 12} = this.props;
    const timestamp = Date.now() / 1000;
    const loopTime = nFrames / animationSpeed;

    this.setState({
      frame: Math.floor(((timestamp % loopTime) / loopTime) * nFrames)
    });
  }

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

  _updateEEObject(props, oldProps, changeFlags) {
    if (!changeFlags.dataChanged) {
      return;
    }

    let eeObject;
    // If a string, assume a JSON-serialized EE object.
    if (typeof props.eeObject === 'string') {
      eeObject = ee.Deserializer.fromJSON(props.eeObject);
    } else {
      eeObject = props.eeObject;
    }

    if (Array.isArray(props.eeObject) && props.eeObject.length === 0) {
      eeObject = null;
    }

    this.setState({eeObject});
  }

  async _updateEEVisParams(props, oldProps, changeFlags) {
    if (props.visParams === oldProps.visParams && !changeFlags.dataChanged) {
      return;
    }

    const {eeObject} = this.state;
    if (!eeObject) {
      return;
    }

    let getTileUrl;
    let renderMethod;
    if (eeObject instanceof ee.ImageCollection) {
      renderMethod = 'filmstrip';
      // no op
    } else if (!eeObject.getMap) {
      throw new Error(
        'EarthEngineLayer only accepts data rows that are EE Objects with a getMap() method'
      );
    } else {
      // Evaluate map
      const map = await promisifyEEMethod(eeObject, 'getMap', props.visParams);
      // Get a tile url generation function
      getTileUrl = map.formatTileUrl.bind(map);
      renderMethod = 'imageTiles';
    }

    this.setState({getTileUrl, renderMethod});
  }

  getTileData(options) {
    const {renderMethod} = this.state;
    if (renderMethod === 'filmstrip') {
      return this.getFilmstripTileData(options);
    }

    return this.getImageTileData(options);
  }

  async getImageTileData({x, y, z}) {
    const {getTileUrl} = this.state;
    if (!getTileUrl) {
      return null;
    }
    const imageUrl = getTileUrl(x, y, z);
    // return load(imageUrl, ImageLoader);
    const image = await load(imageUrl, ImageLoader);
    return Promise.all([image]);
  }

  async getFilmstripTileData({bbox}) {
    const {eeObject} = this.state;
    const {visParams} = this.props;
    const {west, north, east, south} = bbox;
    const TILE_SIZE = 256;

    const filmArgs = {
      ...visParams,
      dimensions: [TILE_SIZE, TILE_SIZE],
      region: ee.Geometry.Rectangle([west, south, east, north]),
      crs: 'EPSG:3857'
    };
    const imageUrl = await promisifyEEMethod(eeObject, 'getFilmstripThumbURL', filmArgs);

    const imageOptions = {image: {type: 'imagebitmap'}};
    const image = await load(imageUrl, ImageLoader, imageOptions);
    const nFrames = image.height / TILE_SIZE;
    this.setState({nFrames});

    const slices = [];
    for (let i = 0; i < nFrames; i++) {
      const imageBounds = [0, i * TILE_SIZE, TILE_SIZE, TILE_SIZE];
      slices.push(createImageBitmap(image, ...imageBounds));
    }

    return Promise.all(slices);
  }

  renderLayers() {
    const {getTileUrl, eeObject, frame = 0} = this.state;
    const {
      refinementStrategy,
      onViewportLoad,
      onTileLoad,
      onTileError,
      maxZoom,
      minZoom,
      maxCacheSize,
      maxCacheByteSize
    } = this.props;

    return (
      eeObject &&
      new TileLayer(
        this.getSubLayerProps({
          id: getTileUrl ? getTileUrl(0, 0, 0) : 'constant string'
          // id: getTileUrl(0, 0, 0)
          // id: Math.random()
          // id: 'constant string'
        }),
        {
          refinementStrategy,
          onViewportLoad,
          onTileLoad,
          onTileError,
          maxZoom,
          minZoom,
          maxCacheSize,
          maxCacheByteSize,
          frame,

          getTileData: options => this.getTileData(options),

          renderSubLayers(props) {
            const {data, tile} = props;
            const {west, south, east, north} = tile.bbox;
            const bounds = [west, south, east, north];

            if (!data) {
              return null;
            }

            let image;
            if (Array.isArray(data)) {
              image = data[frame];
            } else if (data) {
              // image = data;
              image = data.then(result => result && result[frame]);
            }

            return image && new BitmapLayer({...props, image, bounds});
          }
        }
      )
    );
  }
}

EarthEngineLayer.layerName = 'EarthEngineLayer';
EarthEngineLayer.defaultProps = defaultProps;
