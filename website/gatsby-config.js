const resolve = require('path').resolve;

const DOC_TABLE_OF_CONTENTS = require('../docs/table-of-contents.json');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-ocular`,
      options: {
        logLevel: 1, // Adjusts amount of debug information from ocular-gatsby

        // Folders
        DIR_NAME: __dirname,
        ROOT_FOLDER: `${__dirname}/../`,

        DOCS: DOC_TABLE_OF_CONTENTS,
        DOC_FOLDERS: [`${__dirname}/../docs/`, `${__dirname}/../modules/`, `${__dirname}/../py/`],
        SOURCE: [`${__dirname}/static`, `${__dirname}/src`],

        PROJECT_TYPE: 'github',

        PROJECT_NAME: 'earthengine-layers',
        PROJECT_ORG: 'UnfoldedInc',
        PROJECT_ORG_LOGO: 'images/unfolded.png', // TODO - earthengine logo?
        PROJECT_URL: 'https://github.com/UnfoldedInc/earthengine-layers',
        PROJECT_DESC: 'deck.gl layers for Google Earth Engine for JavaScript and Python',
        PATH_PREFIX: '/',

        GA_TRACKING: null,

        // For showing star counts and contributors.
        // Should be like btoa('YourUsername:YourKey') and should be readonly.
        GITHUB_KEY: null,

        HOME_PATH: '/',

        PROJECTS: [
          {
            name: 'deck.gl',
            url: 'https://deck.gl'
          },
          {
            name: 'pydeck',
            url: 'https://pydeck.gl'
          },
          {
            name: 'earthengine-api',
            url: 'https://github.com/google/earthengine-api'
          }
        ],

        LINK_TO_GET_STARTED: '/docs/developer-guide/get-started',

        ADDITIONAL_LINKS: [{name: 'Blog', href: 'http://medium.com/vis-gl', index: 1}],

        INDEX_PAGE_URL: resolve(__dirname, './templates/index.jsx'),

        EXAMPLES: [
          {
            title: 'EE Image',
            image: 'images/image-example-screenshot.jpg',
            componentUrl: resolve(__dirname, '../examples/image/app.js'),
            path: 'examples/image'
          },
          {
            title: 'EE ImageCollection',
            image: 'images/image-animation-example-still.png',
            componentUrl: resolve(__dirname, '../examples/image-collection/app.js'),
            path: 'examples/image-collection'
          },
          {
            title: 'EE FeatureCollection (points)',
            image: 'images/power-plants.jpg',
            componentUrl: resolve(__dirname, '../examples/power-plants/app.js'),
            path: 'examples/power-plants'
          },
          {
            title: 'EE FeatureCollection (lines)',
            image: 'images/noaa_hurricanes.jpg',
            componentUrl: resolve(__dirname, '../examples/noaa-hurricanes/app.js'),
            path: 'examples/noaa-hurricanes'
          },
          {
            title: 'EE FeatureCollection (polygons)',
            image: 'images/intl-boundaries.jpg',
            componentUrl: resolve(__dirname, '../examples/intl-boundary/app.js'),
            path: 'examples/intl-boundary'
          },
          {
            title: 'Terrain',
            image: 'images/terrain.jpg',
            componentUrl: resolve(__dirname, '../examples/terrain/app.js'),
            path: 'examples/terrain'
          }
        ],

        STYLESHEETS: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css']
      }
    },
    {resolve: 'gatsby-plugin-no-sourcemaps'},
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['GoogleMapsAPIKey', 'EE_CLIENT_ID']
      }
    }
  ]
};
