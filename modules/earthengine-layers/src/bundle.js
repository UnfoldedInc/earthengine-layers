/* global window, global */
import EarthEngineLayer from './earth-engine-layer';
const customLayerLibrary = {
  EarthEngineLayer
};

const _global = typeof window === 'undefined' ? global : window;
_global.customLayerLibrary = customLayerLibrary;

export default customLayerLibrary;
