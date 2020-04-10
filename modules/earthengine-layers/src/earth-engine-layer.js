import {CompositeLayer} from '@deck.gl/core';
import EnhancedTileLayer from './tile-layer/enhanced-tile-layer';
import BitmapLayer from './bitmap-layer/bitmap-layer';
import './ee-api'; // Promisify ee apis
import {loadImageBitmap} from './image-utils/image-utils';
import SphericalMercator from '@mapbox/sphericalmercator';

const merc = new SphericalMercator({size: 256});

const defaultProps = {
  /*
  data: object,
  visParams: object
  */
};

export default class EarthEngineLayer extends CompositeLayer {
  initializeState() {
    this.state = {};
  }

  updateState({props, oldProps, changeFlags}) {
    this._updateEEObject(props, oldProps, changeFlags);
    this._updateEEVisParams(props, oldProps, changeFlags);
  }

  _updateEEObject(props, oldProps, changeFlags) {
    if (!changeFlags.dataChanged) {
      return;
    }

    let eeObject = props.data;

    if (Array.isArray(props.data) && props.data.length === 0) {
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

  renderLayers() {
    const {getTileUrl} = this.state;

    return (
      getTileUrl &&
      new EnhancedTileLayer({
        // TODO HACK Get a tile url to trigger refresh on dataset change
        id: getTileUrl(0, 0, 0),
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
