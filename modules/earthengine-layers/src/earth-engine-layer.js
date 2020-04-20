import {CompositeLayer} from '@deck.gl/core';
import EnhancedTileLayer from './tile-layer/enhanced-tile-layer';
import {BitmapLayer} from '@deck.gl/layers';
import EEApi from './ee-api'; // Promisify ee apis
import ee from '@google/earthengine';
// import {load} from '@loaders.gl/core';
// import {ImageLoader, getImageData} from '@loaders.gl/images';
import {loadImageBitmap} from './image-utils/image-utils';
// import {createMeshGrid} from './image-utils/image-utils';

import SphericalMercator from '@mapbox/sphericalmercator';

const merc = new SphericalMercator({size: 256});

const eeApi = new EEApi();

const defaultProps = {
  /*
  data: object,
  token: string,
  eeObject: String || object,
  visParams: object
  */
};

export default class EarthEngineLayer extends CompositeLayer {
  initializeState() {
    this.state = {};
  }

  updateState({props, oldProps, changeFlags}) {
    this._updateToken(props, oldProps, changeFlags);
    this._updateEEObject(props, oldProps, changeFlags);
    this._updateEEVisParams(props, oldProps, changeFlags);
  }

  async _updateToken(props, oldProps, changeFlags) {
    if (!props.token || props.token === oldProps.token) {
      return;
    }

    const {token} = props;
    await eeApi.initialize({token});
    this.setState({token});
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
    const map = await eeObject.getMapAsync(props.visParams);

    // Get a tile url generation function
    const getTileUrl = map.formatTileUrl.bind(map);

    this.setState({map, getTileUrl});
  }

  // Get static layer id for image
  _getLayerId(getTileUrl) {
    const url = getTileUrl(0, 0, 0);

    // This grabs the full layer id of the URL, e.g.
    // [0-9a-f]{32}-[0-9a-f]{32}
    const fullId = url.split('/')[7];

    return fullId.split('-')[0];
  }

  renderLayers() {
    const {getTileUrl} = this.state;

    return (
      getTileUrl &&
      new EnhancedTileLayer({
        // TODO HACK Get a tile url to trigger refresh on dataset change
        id: this._getLayerId(getTileUrl),
        async getTileData({x, y, z}) {
          const imageUrl = getTileUrl(x, y, z);
          const image = await loadImageBitmap(imageUrl);
          // const imageData = await getImageData(image);

          const bounds = merc.bbox(x, y, z);

          // const meshGrid = createMeshGrid(bounds, imageData);
          // const terrain = getGrayScaleData(imageData);
          // const tile = martini.createTile(terrain);
          // const mesh = tile.getMesh(10);
          // console.debug(`loaded tile ${x}/${y}/${z}`, bounds);

          return {
            id: `${z}/${x}/${y}`,
            image,
            bounds
          };
        },

        renderSubLayers(props) {
          // console.debug(props.data.meshGrid);

          return (
            props.data.image && [
              /*
            new SimpleMeshLayer({
              ...props.data,
              data: [{0, 0}]
              mesh: {
                header: {vertexCount: 0},
                attributes: {
                  POSITION: {},
                  NORMAL: {},
                  TEXCOORD_0: {value}
                }
              }
            }),
            new ColumnLayer({
              id: `${props.id}-pt`,
              data: props.data.meshGrid,
              extruded: true,
              radius: 30,
              getPosition: d => [d[0], d[1]],
              getRadius: 0.01,
              getFillColor: d => [0, d[2][1], d[2][2]],
              getElevation: d => d[2][0] * 10,
              opacity: 1
            }),
            */
              // new ScatterplotLayer({
              //   id: `${props.id}-pt`,
              //   data: props.data.meshGrid,
              //   extruded: true,
              //   radius: 30,
              //   getPosition: d => [d[0], d[1]],
              //   getRadius: 0.01,
              //   getFillColor: d => [0, d[2][1], d[2][2]],
              //   getElevation: d => d[2][0] * 10,
              //   opacity: 1
              // }),
              new BitmapLayer({
                ...props.data
                // opacity: 0.2
              })
            ]
          );
        }
      })
    );
  }
}

EarthEngineLayer.layerName = 'EarthEngineLayer';
EarthEngineLayer.defaultProps = defaultProps;
