import Tile2DHeader from './tile-2d-header';
import {getTileIndices} from './utils/viewport-util';

/**
 * Manages loading and purging of tiles data. This class caches recently visited tiles
 * and only create new tiles if they are not present.
 */
export default class Tileset2D {
  /**
   * Takes in a function that returns tile data, a cache size, and a max and a min zoom level.
   * Cache size defaults to 5 * number of tiles in the current viewport
   */
  constructor({maxSize, maxZoom, minZoom, getTileData, onTileLoad, onTileError, onAllTilesLoaded}) {
    this._getTileData = getTileData;
    this.onTileError = onTileError;
    this.onTileLoad = onTileLoad;
    this.onAllTilesLoaded = onAllTilesLoaded;

    // Maps tile id in string {z}-{x}-{y} to a Tile object
    this._cache = new Map();
    this._tiles = [];

    // TODO: Instead of hardcode size, we should calculate how much memory left
    this._maxSize = maxSize;

    if (Number.isFinite(maxZoom)) {
      this._maxZoom = Math.floor(maxZoom);
    }
    if (Number.isFinite(minZoom)) {
      this._minZoom = Math.ceil(minZoom);
    }
  }

  get tiles() {
    return this._tiles;
  }

  /**
   * Clear the current cache
   */
  finalize() {
    this._cache.clear();
  }

  /**
   * Update the cache with the given viewport and triggers callback onUpdate.
   * @param {*} viewport
   * @param {*} onUpdate
   */
  update(viewport) {
    const {_getTileData, _maxSize, _maxZoom, _minZoom} = this;

    this._markOldTiles();

    const tileIndices = getTileIndices(viewport, _maxZoom, _minZoom);
    if (!tileIndices || tileIndices.length === 0) {
      return;
    }

    for (const cachedTile of this._cache.values()) {
      if (tileIndices.some(tileIndex => cachedTile.isOverlapped(tileIndex))) {
        cachedTile.isVisible = true;
      }
    }

    let changed = false;

    for (const tileIndex of tileIndices) {
      const {x, y, z} = tileIndex;
      let tile = this._getTile(x, y, z);
      if (!tile) {
        tile = new Tile2DHeader({
          getTileData: _getTileData,
          x,
          y,
          z
        });

        const tileId = this._getTileId(x, y, z);
        this._cache.set(tileId, tile);
        changed = true;

        this._loadTileContent(tile);
      }
    }

    if (changed) {
      // cache size is either the user defined maxSize or 5 * number of current tiles in the viewport.
      const commonZoomRange = 5;
      this._resizeCache(_maxSize || commonZoomRange * tileIndices.length);
      this._tiles = Array.from(this._cache.values())
        // sort by zoom level so parents tiles don't show up when children tiles are rendered
        .sort((t1, t2) => t1.z - t2.z);
    }
  }

  async _loadTileContent(tile) {
    try {
      await tile.loadContent();
      // console.log('loaded content', tile);
      this.onTileLoad(tile);
      tile.isVisible = true;
    } catch (error) {
      this.onTileError(error);
    }
  }

  /**
   * Clear tiles that are not visible when the cache is full
   */
  _resizeCache(maxSize) {
    if (this._cache.size > maxSize) {
      for (const cachedTile of this._cache) {
        if (this._cache.size <= maxSize) {
          break;
        }
        const tileId = cachedTile[0];
        const tile = cachedTile[1];
        if (!tile.isVisible) {
          this._cache.delete(tileId);
        }
      }
    }
  }

  _markOldTiles() {
    for (const cachedTile of this._cache) {
      cachedTile.isVisible = false;
    }
  }

  _getTile(x, y, z) {
    const tileId = this._getTileId(x, y, z);
    return this._cache.get(tileId);
  }

  _getTileId(x, y, z) {
    return `${z}-${x}-${y}`;
  }
}
