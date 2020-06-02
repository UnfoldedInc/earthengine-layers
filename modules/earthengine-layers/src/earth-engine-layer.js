/* global createImageBitmap */
import {CompositeLayer} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, GeoJsonLayer} from '@deck.gl/layers';
import {eeApiInitialize} from './ee-api'; // Promisify ee apis
import ee from '@google/earthengine';
import {load} from '@loaders.gl/core';
import {ImageLoader} from '@loaders.gl/images';
import {deepEqual, promisifyEEMethod} from './utils';
import {JSONLoader} from '@loaders.gl/json';

// Global access token, to allow single EE API initialization if using multiple
// layers
let accessToken;

const defaultProps = {
  ...TileLayer.defaultProps,
  ...GeoJsonLayer.defaultProps,
  // data prop is unused
  data: {type: 'object', value: null},
  token: {type: 'string', value: null},
  eeObject: {type: 'object', value: null},
  visParams: {type: 'object', value: null, equal: deepEqual},
  // Force rendering as vector
  asVector: false,
  // When rendered as vector, selectors that should be used to determine which
  // attributes will be downloaded
  selectors: {type: 'array', value: [], equal: deepEqual},
  // Force animation; animation is on by default when ImageCollection passed
  animate: false,
  // Frames per second
  animationSpeed: 12,
  refinementStrategy: 'no-overlap'
};

export default class EarthEngineLayer extends CompositeLayer {
  // helper function to initialize EE API
  static async initializeEEApi({clientId, token}) {
    await eeApiInitialize({clientId, token});
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
    await eeApiInitialize({token});
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
    if (props.eeObject === oldProps.eeObject) {
      return;
    }

    let eeObject;
    // If a string, assume a JSON-serialized EE object.
    if (typeof props.eeObject === 'string') {
      eeObject = ee.Deserializer.fromJSON(props.eeObject);
    } else {
      eeObject = props.eeObject;
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

    this.setState({eeObject});
  }

  async _updateEEVisParams(props, oldProps, changeFlags) {
    if (props.visParams === oldProps.visParams && props.eeObject === oldProps.eeObject) {
      return;
    }
    const {animate, asVector, selectors} = props;

    const {eeObject} = this.state;
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
    } else if (asVector) {
      renderMethod = 'vector';
      // Must pass a filename argument ('') so that the callback is correctly
      // called
      const geojsonUrl = await promisifyEEMethod(
        eeObject,
        'getDownloadURL',
        'json',
        ['.geo', ...selectors],
        ''
      );
      const geojsonData = await load(geojsonUrl, JSONLoader);
      this.setState({geojsonData});
    } else {
      renderMethod = 'imageTiles';
    }

    // Evaluate map
    // Done for all eeObjects, including ImageCollection, to get a stable
    // identifier
    const {mapid, urlFormat} = await promisifyEEMethod(eeObject, 'getMap', props.visParams);

    this.setState({mapid, urlFormat, renderMethod});
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

  _renderGeoJsonLayer() {
    const {mapid, geojsonData} = this.state;
    const {
      stroked,
      filled,
      extruded,
      wireframe,
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,
      lineJointRounded,
      lineMiterLimit,
      elevationScale,
      pointRadiusScale,
      pointRadiusMinPixels,
      pointRadiusMaxPixels,
      getLineColor,
      getFillColor,
      getRadius,
      getLineWidth,
      getElevation,
      material
    } = this.props;

    if (!geojsonData) {
      return null;
    }

    return new GeoJsonLayer(
      this.getSubLayerProps({
        id: mapid
      }),
      {
        data: geojsonData,
        stroked,
        filled,
        extruded,
        wireframe,
        lineWidthUnits,
        lineWidthScale,
        lineWidthMinPixels,
        lineWidthMaxPixels,
        lineJointRounded,
        lineMiterLimit,
        elevationScale,
        pointRadiusScale,
        pointRadiusMinPixels,
        pointRadiusMaxPixels,
        getLineColor,
        getFillColor,
        getRadius,
        getLineWidth,
        getElevation,
        material
      }
    );
  }

  renderLayers() {
    const {mapid, frame = 0, renderMethod} = this.state;
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
      mapid &&
      (renderMethod === 'vector'
        ? this._renderGeoJsonLayer()
        : new TileLayer(
            this.getSubLayerProps({
              id: mapid
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
                  image = data.then(result => result && result[frame]);
                }

                return image && new BitmapLayer({...props, image, bounds});
              }
            }
          ))
    );
  }
}

EarthEngineLayer.layerName = 'EarthEngineLayer';
EarthEngineLayer.defaultProps = defaultProps;
