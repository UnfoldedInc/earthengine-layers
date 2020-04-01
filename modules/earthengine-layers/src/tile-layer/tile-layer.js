// TODO
/* eslint-disable no-shadow */
import {log} from '@deck.gl/core';
import {CompositeLayer} from '@deck.gl/core';
import {GeoJsonLayer} from '@deck.gl/layers';
import Tileset2D from '../tileset-2d/tileset-2d';

const defaultProps = {
  renderSubLayers: {type: 'function', value: props => new GeoJsonLayer(props)},
  getTileData: {type: 'function', value: ({x, y, z}) => Promise.resolve(null)},
  onTileLoad: {type: 'function', optional: true, value: () => {}},
  // eslint-disable-next-line
  onTileError: {type: 'function', value: err => console.error(err)},
  onViewportLoad: {type: 'function', optional: true, value: () => {}},
  maxZoom: null,
  minZoom: 0,
  maxCacheSize: null
};

export default class TileLayer extends CompositeLayer {
  initializeState() {
    if ('onViewportLoaded' in this.props) {
      log.removed('onViewportLoaded', 'onViewportLoad')();
    }

    this.state = {
      tileset: null,
      tiles: [],
      allTilesLoaded: false
    };
  }

  shouldUpdateState({changeFlags}) {
    return changeFlags.somethingChanged;
  }

  updateState({props, oldProps, context, changeFlags}) {
    let {tileset} = this.state;
    if (
      !tileset ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getTileData))
    ) {
      const {getTileData, maxZoom, minZoom, maxCacheSize} = props;
      if (tileset) {
        tileset.finalize();
      }

      tileset = new Tileset2D({
        getTileData,
        maxSize: maxCacheSize,
        maxZoom,
        minZoom,
        onTileLoad: this._onTileLoad.bind(this),
        onTileError: this._onTileError.bind(this)
      });

      this.setState({tileset});
    } else if (changeFlags.updateTriggersChanged) {
      // if any updateTriggersChanged (other than getTileData), delete the layer
      for (const tile of this.state.tileset.tiles) {
        tile.layer = null;
      }
    }

    const {viewport} = context;
    if (changeFlags.viewportChanged && viewport.id !== 'DEFAULT-INITIAL-VIEWPORT') {
      this._updateTileset();
    }
  }

  _onTileLoad(tile) {
    const tilesToDisplay = this.state.tiles;

    this._updateTileset();

    // Callback
    this.props.onTileLoad(tile);

    // Callback to track if layer is completely loaded
    const allTilesLoaded = tilesToDisplay.every(tile => tile.allTilesLoaded);
    if (this.state.allTilesLoaded !== allTilesLoaded) {
      this.setState({allTilesLoaded});
      // this.props.onLayerLoaded(allTilesLoaded);
      if (allTilesLoaded) {
        const {onViewportLoad} = this.props;
        onViewportLoad(tilesToDisplay.filter(tile => tile._data).map(tile => tile._data));
      }
    }
  }

  _onTileError(error) {
    this.props.onTileError(error);
    // errorred tiles should not block rendering, are considered "loaded" with empty data
    this._onTileLoad();
  }

  _updateTileset() {
    const {viewport} = this.context;
    const {tileset} = this.state;
    tileset.update(viewport);

    // The tiles that should be displayed at this zoom level
    const z = this.getZoomLevel();
    const tiles = tileset.tiles.filter(tile => tile.z === z);
    this.setState({
      allTilesLoaded: false,
      tiles
    });

    // console.log(tileset._tiles, tiles, z);

    this.setNeedsUpdate();
    this.setNeedsRedraw();
  }

  getPickingInfo({info, sourceLayer}) {
    info.sourceLayer = sourceLayer;
    info.tile = sourceLayer.props.tile;
    return info;
  }

  getZoomLevel() {
    const {viewport} = this.context;
    const z = Math.floor(viewport.zoom);
    const {maxZoom, minZoom} = this.props;
    if (Number.isFinite(maxZoom) && z > maxZoom) {
      return Math.floor(maxZoom);
    } else if (Number.isFinite(minZoom) && z < minZoom) {
      return Math.ceil(minZoom);
    }
    return z;
  }

  renderLayers() {
    const {renderSubLayers, visible} = this.props;
    const z = this.getZoomLevel();

    const layers = [];
    for (const tile of this.state.tileset.tiles) {
      if (tile.isLoaded) {
        // For a tile to be visible:
        // - parent layer must be visible
        // - tile must be visible in the current viewport
        // - if all tiles are loaded, only display the tiles from the current z level
        const isVisible = visible && tile.isVisible && (!this.state.isLoaded || tile.z === z);
        // cache the rendered layer in the tile
        // TODO - layers never update?
        if (!tile.layer) {
          const subLayers = renderSubLayers(
            Object.assign({}, this.props, {
              id: `${this.id}-${tile.x}-${tile.y}-${tile.z}`,
              data: tile.data,
              visible: isVisible,
              tile
            })
          );
          // eslint-disable-next-line max-depth
          if (subLayers) {
            tile.layer = Array.isArray(subLayers) ? subLayers : [subLayers];
          }
        } else if (tile.layer.some(layer => layer.props.visible !== isVisible)) {
          tile.layer = tile.layer.map(layer => layer.clone({visible: isVisible}));
        }
      }
      layers.push(tile.layer);
    }
    return layers;
  }

  /* Original layer code
  renderLayers() {
    const {renderSubLayers, visible} = this.props;
    const z = this.getZoomLevel();

    console.log('renderlayers', tileset._tiles, tiles, z);
    return this.state.tileset.tiles.map(tile => {
      // For a tile to be visible:
      // - parent layer must be visible
      // - tile must be visible in the current viewport
      // - if all tiles are loaded, only display the tiles from the current z level
      const isVisible = visible && tile.isVisible && (!this.state.allTilesLoaded || tile.z === z);
      // cache the rendered layer in the tile
      if (!tile.layer) {
        tile.layer = renderSubLayers(
          Object.assign({}, this.props, {
            id: `${this.id}-${tile.x}-${tile.y}-${tile.z}`,
            data: tile.data,
            visible: isVisible,
            tile
          })
        );
      } else if (tile.layer.props.visible !== isVisible) {
        tile.layer = tile.layer.clone({visible: isVisible});
      }
      return tile.layer;
    });
  }
  */
}

TileLayer.layerName = 'TileLayer';
TileLayer.defaultProps = defaultProps;
