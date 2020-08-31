# Get Started

## Installing

```sh
$ yarn add @google/earthengine
$ yarn add @unfolded/earthengine-layers
$ yarn add deck.gl
```

## Using in Python

The `EarthEngineLayer` can be used as a plugin layer to
[`pydeck`](https://pydeck.gl). For more information see [pydeck
integration](/docs/developer-guide/pydeck-integration.md).

## Using in JavaScript

To use the `EarthEngineLayer` in your JavaScript application to visualize Earth
Engine API objects (such as `ee.Image` objects):

```js
import {Deck} from '@deck.gl/core';
import {EarthEngineLayer} from '@unfolded/earthengine-layers';
import ee from '@google/earthengine';

const eeObject = ee.Image('CGIAR/SRTM90_V4');
const visParams = {
  min: 0,
  max: 4000,
  palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
};

new Deck({
  ...,
  layers: new EarthEngineLayer({eeObject, visParams})
});
```

## Cloning the Repo

```sh
git clone https://github.com/UnfoldedInc/earthengine-layers
cd earthengine-layers
```

## Running Examples

You will need a Google client id which has been approved for use with Earth
Engine. You also need to make sure you log in with a Google user account which
has been approved for use with earth engine.

```sh
cd examples/image
EE_CLIENT_ID=<your-client-id-goes-here>.apps.googleusercontent.com yarn start
```

## Contributing

### Building and Testing Code

```sh
git clone https://github.com/UnfoldedInc/earthengine-layers
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
yarn develop
```

To build the website for production

```sh
cd website
export EE_CLIENT_ID=...
export GoogleMapsAPIKey=...
yarn build
yarn deploy
```
