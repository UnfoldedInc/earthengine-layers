import TileLayer from './tile-layer';

export default class EnhancedTileLayer extends TileLayer {
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
}
