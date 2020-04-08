const webpack = require('webpack');
const MODULE_ALIASES = {}; // require('../aliases');
const {resolve} = require('path');

// eslint-disable-next-line
if (!process.env.EE_CLIENT_ID) {
  throw new Error('Environment variable EE_CLIENT_ID not set');
}

const CONFIG = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  output: {
    library: 'App'
  },

  resolve: {
    // Make src files outside of this dir resolve modules in our node_modules folder
    modules: [resolve(__dirname, '.'), resolve(__dirname, 'node_modules'), 'node_modules']
  },

  module: {
    rules: [
      {
        // Transpile ES6 to ES5 with babel
        // Remove if your app does not use JSX or you don't need to support old browsers
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        include: [
          resolve(__dirname, '.'),
          resolve(__dirname, '../shared'),
          /modules\/.*\/src/,
          ...Object.values(MODULE_ALIASES)
        ],
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
          ignore: [/ee_api/]
        }
      }
    ]
  },

  plugins: [new webpack.EnvironmentPlugin(['EE_CLIENT_ID'])]
};

// This line enables bundling against src in this repo rather than installed module
module.exports = CONFIG; // env => (env ? require('../webpack.config.local')(CONFIG)(env) : CONFIG);
