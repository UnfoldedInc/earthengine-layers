const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODULE_ALIASES = {}; // require('../aliases');
const {resolve} = require('path');

const CONFIG = {
  mode: 'development',

  entry: {
    app: './src/app.js'
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
          resolve(__dirname, 'src'),
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

  plugins: [new HtmlWebpackPlugin({title: 'earthengine-layer demo'})]
};

// This line enables bundling against src in this repo rather than installed module
module.exports = CONFIG; // env => (env ? require('../webpack.config.local')(CONFIG)(env) : CONFIG);
