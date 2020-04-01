// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Lon..2Flat._to_tile_numbers_2

import {TILE_CONTENT_STATE} from './constants';

export function tile2latLng(x, y, z) {
  const lng = (x / Math.pow(2, z)) * 360 - 180;
  const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
  const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  return [lng, lat];
}

export function tile2boundingBox(x, y, z) {
  const [west, north] = tile2latLng(x, y, z);
  const [east, south] = tile2latLng(x + 1, y + 1, z);
  return {west, north, east, south};
}

export default class Tile2DHeader {
  constructor({x, y, z, getTileData}) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.getTileData = getTileData;

    this.bbox = tile2boundingBox(this.x, this.y, this.z);
    this.isVisible = true;
    this.data = null;
    this.state = TILE_CONTENT_STATE.UNLOADED;
  }

  get isLoaded() {
    return this.state === TILE_CONTENT_STATE.READY;
  }

  isOverlapped(tileIndex) {
    const {x, y, z} = this;
    const m = Math.pow(2, tileIndex.z - z);
    return Math.floor(tileIndex.x / m) === x && Math.floor(tileIndex.y / m) === y;
  }

  async loadContent() {
    if (this.state !== TILE_CONTENT_STATE.UNLOADED) {
      return false;
    }

    try {
      const {x, y, z, bbox} = this;
      this.state = TILE_CONTENT_STATE.LOADING;
      // TODO - use request scheduler
      this.data = await this.getTileData({x, y, z, bbox});
      this.state = TILE_CONTENT_STATE.READY;
      return true;
    } catch (error) {
      this.state = TILE_CONTENT_STATE.FAILED;
      this.data = null;
      throw error;
    }
  }
}
