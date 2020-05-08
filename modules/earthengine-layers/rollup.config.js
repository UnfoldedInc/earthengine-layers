import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const config = (file, plugins = []) => ({
  input: 'src/bundle.js',
  output: {
    file,
    format: 'iife',
    name: 'EarthEngineLayerLibrary',
    globals: {
      '@deck.gl/core': 'deck',
      '@deck.gl/layers': 'deck',
      '@luma.gl/core': 'luma',
      '@loaders.gl/core': 'loaders'
    }
  },
  external: [
    '@deck.gl/core',
    '@deck.gl/layers',
    '@luma.gl/core',
    '@luma.gl/engine',
    '@luma.gl/gltools',
    '@luma.gl/webgl',
    '@loaders.gl/core',
    '@loaders.gl/loader-utils'
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

export default [config('dist/bundle.js'), config('dist/bundle.min.js', [terser()])];
