import {CompositeLayer} from '@deck.gl/core';
import {TerrainLayer} from '@deck.gl/geo-layers';
import ee from '@google/earthengine';
import {initializeEEApi} from './ee-api'; // Promisify ee apis
import {deepEqual, promisifyEEMethod} from './utils';

/**
 * Decoder for Terrarium encoding
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
  ...TerrainLayer.defaultProps,
  // data prop is unused
  data: {type: 'object', value: null},
  token: {type: 'string', value: null},
  eeObject: {type: 'object', value: null},
  eeTerrainObject: {type: 'object', value: null},
  visParams: {type: 'object', value: null, equal: deepEqual},

  // TileLayer props with custom defaults
  maxRequests: 6,
  refinementStrategy: 'no-overlap',
  tileSize: 256
};

export default class EarthEngineTerrainLayer extends CompositeLayer {
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
  }

  async _updateToken(props, oldProps, changeFlags) {
    if (!props.token || props.token === accessToken) {
      return;
    }

    const {token} = props;
    await initializeEEApi({token});
    accessToken = token;
  }

  _updateEEObject(props, oldProps, changeFlags) {
    if (
      props.eeObject === oldProps.eeObject &&
      props.eeTerrainObject === oldProps.eeTerrainObject
    ) {
      return;
    }

    let eeObject;
    let eeTerrainObject;
    // If a string, assume a JSON-serialized EE object.
    if (typeof props.eeObject === 'string') {
      eeObject = ee.Deserializer.fromJSON(props.eeObject);
    } else {
      eeObject = props.eeObject;
    }
    if (typeof props.eeTerrainObject === 'string') {
      eeTerrainObject = ee.Deserializer.fromJSON(props.eeTerrainObject);
    } else {
      eeTerrainObject = props.eeTerrainObject;
    }

    if (eeTerrainObject) {
      // Quantize eeTerrainObject
      const added = eeTerrainObject.add(32768);
      const red = added.divide(256).floor();
      const green = added.mod(256).floor();
      const blue = added
        .subtract(added.floor())
        .multiply(255)
        .floor();
      eeTerrainObject = ee.Image.rgb(red, green, blue);
    }

    // TODO - what case is this handling
    if (Array.isArray(props.eeObject) && props.eeObject.length === 0) {
      eeObject = null;
    }

    this.setState({eeObject, eeTerrainObject});
  }

  async _updateEEVisParams(props, oldProps, changeFlags) {
    if (
      props.visParams === oldProps.visParams &&
      props.eeObject === oldProps.eeObject &&
      props.eeTerrainObject === oldProps.eeTerrainObject
    ) {
      return;
    }

    const {eeObject, eeTerrainObject} = this.state;
    if (!eeObject) {
      return;
    }

    if (!eeObject.getMap) {
      throw new Error('eeObject must have a getMap() method');
    }

    // Evaluate map
    // Done for all eeObjects, including ImageCollection, to get a stable
    // identifier
    const {mapid, urlFormat} = await promisifyEEMethod(eeObject, 'getMap', props.visParams);

    const {mapid: meshMapid, urlFormat: meshUrlFormat} = await promisifyEEMethod(
      eeTerrainObject,
      'getMap',
      {
        min: 0,
        max: 255,
        format: 'png'
      }
    );

    this.setState({mapid, urlFormat, meshMapid, meshUrlFormat});
  }

  renderLayers() {
    const {mapid, urlFormat, meshMapid, meshUrlFormat} = this.state;
    const {extent, maxRequests, maxZoom, minZoom, tileSize} = this.props;

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
          meshMaxError: 10,
          extent,
          maxRequests,
          maxZoom,
          minZoom,
          tileSize
        }
      )
    );
  }
}

EarthEngineTerrainLayer.layerName = 'EarthEngineTerrainLayer';
EarthEngineTerrainLayer.defaultProps = defaultProps;
