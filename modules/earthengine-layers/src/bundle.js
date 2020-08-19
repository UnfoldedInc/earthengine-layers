/* global window, global */
import EarthEngineLayer from './earth-engine-layer';
import EarthEngineTerrainLayer from './earth-engine-terrain-layer';
const EarthEngineLayerLibrary = {
  EarthEngineLayer,
  EarthEngineTerrainLayer
};

const _global = typeof window === 'undefined' ? global : window;
_global.EarthEngineLayerLibrary = EarthEngineLayerLibrary;

export default EarthEngineLayerLibrary;
