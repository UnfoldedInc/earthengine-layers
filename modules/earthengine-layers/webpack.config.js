const resolve = require('path').resolve;

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  resolve: {
    // for amd build, load deck and luma from global
    alias: {
      '@deck.gl/core': resolve(__dirname, 'src/deck'),
      '@deck.gl/layers': resolve(__dirname, 'src/deck'),
      '@luma.gl/core': resolve(__dirname, 'src/luma')
    }
  },

  output: {
    filename: 'bundle.js',
    library: 'customLayerLibrary',
    libraryTarget: 'amd-require'
  },

  entry: {
    main: './src/bundle.js'
  }
};
