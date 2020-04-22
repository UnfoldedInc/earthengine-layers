import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const config = {
  input: 'src/bundle.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'EarthEngineLayerLibrary',
    globals: {
      '@deck.gl/core': 'deck',
      '@deck.gl/layers': 'deck',
      '@luma.gl/core': 'luma'
    }
  },
  external: ['@deck.gl/core', '@deck.gl/layers', '@luma.gl/core'],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: true
    }),
    commonjs(),
    json()
  ]
};

export default config;
