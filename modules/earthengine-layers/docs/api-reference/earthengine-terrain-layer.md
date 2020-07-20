# EarthEngineTerrainLayer

<p class="badges">
  <img src="https://img.shields.io/badge/@unfolded.gl/earthengine--layers-lightgrey.svg?style=flat-square" alt="@unfolded.gl/earthengine-layers" />
</p>

The `EarthEngineTerrainLayer` connects [Google Earth Engine][gee] to
[deck.gl](https://deck.gl), making it possible to visualize planetary-scale
geospatial datasets _over 3D terrain_ in a JavaScript application. The
difference with the `EarthEngineLayer` is that you must provide _two_
EarthEngine data sources, one to be used as the imagery source, another as the
terrain source.

[gee]: https://earthengine.google.com/

To use this layer, you need to sign in with an EarthEngine-enabled Google
Account. [Visit here][gee-signup] to sign up.

[gee-signup]: https://signup.earthengine.google.com/#!/

This particular example uses the deck.gl React bindings but the
`EarthEngineTerrainLayer` can of course also be used with the pure JavaScript
and scripting APIs:

```js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {EarthEngineTerrainLayer} from '@unfolded.gl/earthengine-layers';
import ee from '@google/earthengine';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null, eeTerrainObject: null};
  }

  async _onLoginSuccess(user, loginProvider) {
    const token = 'Google OAuth2 access token'
    await EarthEngineTerrainLayer.initializeEEApi({clientId: EE_CLIENT_ID, token});
    this.setState({
      eeObject: ee.Image('CGIAR/SRTM90_V4'),
      eeTerrainObject: ee.Image('USGS/NED').select('elevation')
    });
  }

  render() {
    const {viewport} = this.props;
    const {eeObject, eeTerrainObject} = this.state;
    const visParams = {
      min: 0,
      max: 4000,
      palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
    };
    const layers = [new EarthEngineTerrainLayer({eeObject, visParams, eeTerrainObject, opacity: 1})];
    return (
        <DeckGL controller {...viewport} layers={layers}/>
    );
  }
}
```

## Installation

To install the dependencies from NPM:

```bash
npm install deck.gl @google/earthengine @unfolded.gl/earthengine-layers
# or
npm install @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @google/earthengine @unfolded.gl/earthengine-layers
```

```js
import {EarthEngineTerrainLayer} from '@unfolded.gl/earthengine-layers';
new EarthEngineTerrainLayer({});
```

To use pre-bundled scripts:

```html
<script src="https://unpkg.com/deck.gl@^8.0.0/dist.min.js"></script>
<script src="https://unpkg.com/@google/earthengine@^0.1.221/build/ee_api_js.js"></script>
<script src="https://unpkg.com/@unfolded.gl/earthengine-layers@^0.1.0/dist.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/@deck.gl/core@^8.0.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/layers@^8.0.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/geo-layers@^8.0.0/dist.min.js"></script>
<script src="https://unpkg.com/@google/earthengine@^0.1.221/build/ee_api_js.js"></script>
<script src="https://unpkg.com/@unfolded.gl/earthengine-layers@^0.1.0/dist.min.js"></script>
```

```js
new deck.EarthEngineTerrainLayer({});
```

## Static Methods

### async initializeEEApi({clientId?: string, token?: string})

Can be called to initialize the earth engine API. Calls
`ee.data.authenticateViaOauth()`, `ee.initialize()` or `ee.setToken()`, and
returns a `Promise` that resolves when authentication and initialization is
completed and the EE API is ready to use.

This method is just a convenience, it can be replaced with direct calls to the
EE API.

Parameters:
- `clientId` A valid Google clientId that has been authenticated with the earthengine scope and set up to whitelist the 'origin' URL that the app will be served on.
- `token` Alternatively, a pre-generated OAuth2 access token.

## Properties

Inherits all properties from base [`Layer`][base-layer] and from the [`TileLayer`][tile-layer].

[base-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/layer
[tile-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/tile-layer

### Authentication Options

##### `token` (String, optional)

- Default: `null`

A valid Google OAuth2 access token. Unnecessary from `pydeck` or if using
`initializeEEApi` described above.

### Data Options

##### `eeObject` (EarthEngine Object|String)

- Default: `null`

The EarthEngine source used for rendering imagery on top of terrain.

Either an EarthEngine JavaScript API object, or a serialized string representing
an object (created with, e.g. `ee.Image.serialize()`).

This source is expected to be a raster image whose data value represents
elevations in meters.

##### `eeTerrainObject` (EarthEngine Object|String)

- Default: `null`

The EarthEngine source to be used as the terrain.

Either an EarthEngine JavaScript API object, or a serialized string representing
an object (created with, e.g. `ee.Image.serialize()`).

By default, `getMap` is called on the object, and image tiles are displayed
representing the object.

##### `visParams` (Object, optional)

- Default: `null`

An object representing the visualization parameters passed to Earth Engine. See
[Earth Engine documentation][visparams-docs] for more information on supported
parameters. Alternatively, you can style objects by using the
[`.style()`][style-fn] function for `FeatureCollection` or `ImageCollection`
objects.

[visparams-docs]: https://developers.google.com/earth-engine/image_visualization
[style-fn]: https://developers.google.com/earth-engine/api_docs#ee.featurecollection.style

## Source

[modules/earthengine-layers/src/earth-engine-terrain-layer](https://github.com/UnfoldedInc/earthengine-layers/tree/master/modules/earthengine-layers/src)
