import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const config = ({file, plugins = [], globals = {}, external = [], outputFormat}) => ({
  input: 'src/bundle.js',
  output: {
    file,
    format: outputFormat,
    name: 'EarthEngineLayerLibrary',
    globals: {
      ...globals,
      '@deck.gl/core': 'deck',
      '@loaders.gl/core': 'loaders'
    }
  },
  external: [...external, '@deck.gl/core', '@loaders.gl/core'],
  plugins: [
    ...plugins,
    resolve({
      browser: true,
      preferBuiltins: true
    }),
    commonjs(),
    json()
  ]
});

const eeGlobals = {
  '@google/earthengine': 'ee',
  '@deck.gl/core': 'deck',
  '@deck.gl/geo-layers': 'deck',
  '@deck.gl/layers': 'deck',
  '@deck.gl/mesh-layers': 'deck'
};

// deck.gl globals provided by pydeck. See:
// https://github.com/visgl/deck.gl/blob/c8702ae134e0598b2fdca03642744f25e9de593b/modules/jupyter-widget/src/deck-bundle.js
const pydeckGlobals = {
  '@deck.gl/aggregation-layers': 'deck',
  '@deck.gl/core': 'deck',
  '@deck.gl/geo-layers': 'deck',
  '@deck.gl/google-maps': 'deck',
  '@deck.gl/json': 'deck',
  '@deck.gl/layers': 'deck',
  '@deck.gl/mesh-layers': 'deck'
};

export default [
  config({
    file: 'dist/dist.js',
    globals: eeGlobals,
    external: Object.keys(eeGlobals),
    outputFormat: 'iife'
  }),
  config({
    file: 'dist/dist.min.js',
    plugins: [terser()],
    globals: eeGlobals,
    external: Object.keys(eeGlobals),
    outputFormat: 'iife'
  }),
  config({
    file: 'dist/dist.esm.js',
    globals: eeGlobals,
    external: Object.keys(eeGlobals),
    outputFormat: 'es'
  }),
  config({
    file: 'dist/dist.esm.min.js',
    plugins: [terser()],
    globals: eeGlobals,
    external: Object.keys(eeGlobals),
    outputFormat: 'es'
  }),
  config({
    file: 'dist/pydeck_layer_module.js',
    globals: pydeckGlobals,
    external: Object.keys(pydeckGlobals),
    outputFormat: 'iife'
  }),
  config({
    file: 'dist/pydeck_layer_module.min.js',
    globals: pydeckGlobals,
    external: Object.keys(pydeckGlobals),
    plugins: [terser()],
    outputFormat: 'iife'
  })
];
