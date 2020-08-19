import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const config = ({file, plugins = [], globals = {}, external = []}) => ({
  input: 'src/bundle.js',
  output: {
    file,
    format: 'iife',
    name: 'EarthEngineLayerLibrary',
    globals: {
      ...globals,
      '@deck.gl/core': 'deck',
      '@deck.gl/layers': 'deck',
      '@loaders.gl/core': 'loaders'
    }
  },
  external: [
    ...external,
    '@deck.gl/core',
    '@deck.gl/layers',
    '@loaders.gl/core'
  ],
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

export default [
  config({
    file: 'dist/dist.js',
    globals: {'@google/earthengine': 'ee'},
    external: ['@google/earthengine']
  }),
  config({
    file: 'dist/dist.min.js',
    plugins: [terser()],
    globals: {'@google/earthengine': 'ee'},
    external: ['@google/earthengine']
  }),
  config({
    file: 'dist/pydeck_layer_module.js'
  }),
  config({
    file: 'dist/pydeck_layer_module.min.js',
    plugins: [terser()]
  })
];
