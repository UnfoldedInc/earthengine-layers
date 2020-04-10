/* global window, global */

const _global = typeof window === 'undefined' ? global : window;
const {Model, Geometry, Texture2D} = _global.luma;

export {Model, Geometry, Texture2D};
