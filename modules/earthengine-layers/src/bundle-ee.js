/* global window, global */
import ee from '@google/earthengine';

const _global = typeof window === 'undefined' ? global : window;
_global.ee = ee;

export default ee;
