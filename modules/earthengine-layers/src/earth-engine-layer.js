import {CompositeLayer} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';
import EEApi from './ee-api'; // Promisify ee apis
import ee from '@google/earthengine';
import {load} from '@loaders.gl/core';
import {ImageLoader} from '@loaders.gl/images';
import {deepEqual, getMapAsync} from './utils';

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

    if (!eeObject.getMap) {
      throw new Error(
        'EarthEngineLayer only accepts data rows that are EE Objects with a getMap() method'
      );
    }

    // Evaluate map
    const map = await getMapAsync(eeObject, props.visParams);

    // Get a tile url generation function
    const getTileUrl = map.formatTileUrl.bind(map);

    this.setState({map, getTileUrl});
  }

  renderLayers() {
    const {getTileUrl} = this.state;
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
      getTileUrl &&
      new TileLayer(
        this.getSubLayerProps({
          id: getTileUrl(0, 0, 0)
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

          async getTileData({x, y, z}) {
            const imageUrl = getTileUrl(x, y, z);
            const image = await load(imageUrl, ImageLoader);
            return image;
          },

          renderSubLayers(props) {
            const {data, tile} = props;
            const {west, south, east, north} = tile.bbox;
            const bounds = [west, south, east, north];

            return (
              data && [
                new BitmapLayer(
                  Object.assign(props, {
                    image: data,
                    bounds
                  })
                )
              ]
            );
          }
        }
      )
    );
  }
}

EarthEngineLayer.layerName = 'EarthEngineLayer';
EarthEngineLayer.defaultProps = defaultProps;
