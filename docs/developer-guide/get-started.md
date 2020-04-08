# Get Started

## Installing

```sh
$ yarn add @google/earthengine
$ yarn add @unfolded/earthengine-layers
$ yarn add @deck.gl/core @deck.gl/layers @deck.gl/geo-layers
```

## Using in Python

The `EarthEngineLayer` can be used as a plugin layer to [`pydeck`](https://pydeck.gl).

For more information see [pydeck integration](docs/developer-guide/pydeck-integration.md).

## Using in JavaScript

To use the `EarthEngineLayer` in your JavaScript application to visualize earthengine API objects (such as `ee.Image` objects):

```js
import {Deck} from '@deck.gl/core`;
import {EarthEngineLayer} from `@unfolded/earthengine-layers`;
import ee from `@google/earthengine-layers`;

const eeImage = ee.Image('CGIAR/SRTM90_V4');

new Deck({
  ...,
  layers: new EarthEngineLayer({data: eeImage, vizParams: {min: 0, max: 255}})
});
```

## Cloning the Repo

```sh
git clone git@github.com:UnfoldedInc/earthengine-layers.git
cd earthengine-layers
```

## Running Examples

You will need a Google client id which has been approved for use with earthengine. You also need to make sure you log in with a Google user account which has been approved for use with earth engine.

```sh
cd examples/ee-demo
EE_CLIENT_ID=<your-client-id-goes-here>.apps.googleusercontent.com yarn start
```

## Contributing

### Building and Testing Code

```sh
git clone git@github.com:UnfoldedInc/earthengine-layers.git
cd earthengine-layers
yarn bootstrap
```

```sh
yarn lint
yarn lint fix # Autoformats code
yarn test
```

## Building the Website

To build the website locally (for instance if you are making contributions)

```sh
cd website
yarn
yarn start
```

To build the website for production

```sh
cd website
yarn
yarn build
```
