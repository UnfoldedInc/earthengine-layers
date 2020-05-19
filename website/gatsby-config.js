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
        DOC_FOLDERS: [`${__dirname}/../docs/`, `${__dirname}/../modules/`],
        SOURCE: [`${__dirname}/static`, `${__dirname}/src`],

        PROJECT_TYPE: 'github',

        PROJECT_NAME: 'earthengine-layers',
        PROJECT_ORG: 'UnfoldedInc',
        PROJECT_ORG_LOGO: 'images/unfolded.png', // TODO - earthengine logo?
        PROJECT_URL: 'https://github.com/UnfoldedInc/earthengine-layers',
        PROJECT_DESC: 'deck.gl layers for Google Earth Engine API',
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
            name: 'earthengine-api',
            url: 'https://github.com/google/earthengine-api'
          },
          {
            name: 'nebula.gl',
            url: 'https://nebula.gl/'
          }
        ],

        LINK_TO_GET_STARTED: '/docs/developer-guide/get-started',

        ADDITIONAL_LINKS: [{name: 'Blog', href: 'http://medium.com/vis-gl', index: 1}],

        INDEX_PAGE_URL: resolve(__dirname, './templates/index.jsx'),

        EXAMPLES: [
          {
            title: 'Image',
            image: 'images/example-eelayer.png',
            componentUrl: resolve(__dirname, '../examples/ee-demo/image.js'),
            path: 'examples/image'
          },
          {
            title: 'ImageCollection Animation',
            image: 'images/example-eelayer.png',
            componentUrl: resolve(__dirname, '../examples/ee-demo/image-collection-animation.js'),
            path: 'examples/image-collection-animation'
          }
        ],

        STYLESHEETS: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css']
      }
    },
    {resolve: 'gatsby-plugin-no-sourcemaps'},
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['MapboxAccessToken', 'EE_CLIENT_ID'] // TODO replace with Google Maps integration
      }
    }
  ]
};
