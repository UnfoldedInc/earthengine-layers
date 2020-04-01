const {resolve} = require('path');

const config = {
  lint: {
    paths: ['modules', 'examples', 'test'],
    extensions: ['js']
  },

  aliases: {
    // 'deck.gl-test': resolve(__dirname, './test')
  },

  browserTest: {
    server: {wait: 5000}
  },

  entry: {
    test: 'test/node.js',
    'test-browser': 'test/browser.js',
    bench: 'test/bench/node.js',
    'bench-browser': 'test/bench/browser.js',
    size: 'test/size/import-nothing.js'
  }
};

module.exports = config;
