/* global window, global */
import EarthEngineLayer from './earth-engine-layer';
const EarthEngineLayerLibrary = {
  EarthEngineLayer
};

const _global = typeof window === 'undefined' ? global : window;
_global.EarthEngineLayerLibrary = EarthEngineLayerLibrary;

export default EarthEngineLayerLibrary;
