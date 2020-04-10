/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck;

const {CompositeLayer, GeoJsonLayer, Layer, project32, picking, log} = deck;

export {CompositeLayer, GeoJsonLayer, Layer, project32, picking, log};
