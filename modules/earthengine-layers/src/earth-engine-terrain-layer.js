import {CompositeLayer} from '@deck.gl/core';
import {TileLayer, TerrainLayer} from '@deck.gl/geo-layers';
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
  ...TileLayer.defaultProps,
  // data prop is unused
  data: {type: 'object', value: null},
  token: {type: 'string', value: null},
  eeObject: {type: 'object', value: null},
  eeTerrainObject: {type: 'object', value: null},
  visParams: {type: 'object', value: null, equal: deepEqual},
  refinementStrategy: 'no-overlap'
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
    this._animate();
  }

  async _updateToken(props, oldProps, changeFlags) {
    if (!props.token || props.token === accessToken) {
      return;
    }

    const {token} = props;
    await initializeEEApi({token});
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

EarthEngineTerrainLayer.layerName = 'EarthEngineTerrainLayer';
EarthEngineTerrainLayer.defaultProps = defaultProps;
