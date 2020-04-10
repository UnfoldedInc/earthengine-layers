/* global window, global */
const EarthEngineLayer = require('./earth-engine-layer').default;
const customLayerLibrary = {
  EarthEngineLayer
};

const _global = typeof window === 'undefined' ? global : window;
_global.customLayerLibrary = customLayerLibrary;

module.exports = _global.customLayerLibrary;
