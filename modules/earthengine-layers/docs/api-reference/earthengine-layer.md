# EarthEngineLayer

<p class="badges">
  <img src="https://img.shields.io/badge/@unfolded.gl/earthengine--layers-lightgrey.svg?style=flat-square" alt="@unfolded.gl/earthengine-layers" />
</p>

The `EarthEngineLayer` connects [Google Earth Engine][gee] to
[deck.gl](https://deck.gl), making it possible to visualize planetary-scale
geospatial datasets in a JavaScript application.

[gee]: https://earthengine.google.com/

To use this layer, you need to sign in with an EarthEngine-enabled Google
Account. [Visit here][gee-signup] to sign up.

[gee-signup]: https://signup.earthengine.google.com/#!/

This particular example uses the deck.gl React bindings but the
`EarthEngineLayer` can of course also be used with the pure JavaScript and
scripting APIs:

```js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import ee from '@google/earthengine';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null};
  }

  async _onLoginSuccess(user, loginProvider) {
    const token = 'Google OAuth2 access token'
    await EarthEngineLayer.initializeEEApi({clientId: EE_CLIENT_ID, token});
    this.setState({eeObject: ee.Image('CGIAR/SRTM90_V4')});
  }

  render() {
    const {viewport} = this.props;
    const {eeObject} = this.state;
    const visParams = {
      min: 0,
      max: 4000,
      palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
    };
    const layers = [new EarthEngineLayer({eeObject, visParams})];
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
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
new EarthEngineLayer({});
```

To use pre-bundled scripts:

```html
<script src="https://unpkg.com/deck.gl@^8.2.0/dist.min.js"></script>
<script src="https://unpkg.com/@google/earthengine@^0.1.234/build/ee_api_js.js"></script>
<script src="https://unpkg.com/@unfolded.gl/earthengine-layers@^1.2.1/dist.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/@deck.gl/core@^8.2.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/layers@^8.2.0/dist.min.js"></script>
<script src="https://unpkg.com/@deck.gl/geo-layers@^8.2.0/dist.min.js"></script>
<script src="https://unpkg.com/@google/earthengine@^0.1.234/build/ee_api_js.js"></script>
<script src="https://unpkg.com/@unfolded.gl/earthengine-layers@^1.2.1/dist.min.js"></script>
```

```js
new deck.EarthEngineLayer({});
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

Inherits all properties from base [`Layer`][base-layer] and from the [`TileLayer`][tile-layer]. If rendering images, inherits all properties from the [`BitmapLayer`][bitmap-layer]. If rendering vector data, inherits all properties from the [`GeoJsonLayer`][geojson-layer].

[base-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/layer
[tile-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/tile-layer
[bitmap-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/bitmap-layer
[geojson-layer]: https://deck.gl/#/documentation/deckgl-api-reference/layers/geojson-layer

### Authentication Options

##### `token` (String, optional)

- Default: `null`

A valid Google OAuth2 access token. Unnecessary from `pydeck` or if using
`initializeEEApi` described above.

### Data Options

##### `eeObject` (EarthEngine Object|String)

- Default: `null`

Either an EarthEngine JavaScript API object, or a serialized string representing
an object (created with, e.g. `ee.Image.serialize()`).

By default, `getMap` is called on the object, and image tiles are displayed
representing the object. You can pass `asVector` or `animate` for alternative
rendering.

##### `visParams` (Object, optional)

- Default: `null`

An object representing the visualization parameters passed to Earth Engine. See
[Earth Engine documentation][visparams-docs] for more information on supported
parameters. Alternatively, you can style objects by using the
[`.style()`][style-fn] function for `FeatureCollection` or `ImageCollection`
objects.

[visparams-docs]: https://developers.google.com/earth-engine/image_visualization
[style-fn]: https://developers.google.com/earth-engine/api_docs#ee.featurecollection.style

Unused when `asVector` is `true`.

##### `selectors` (Array of String, optional)

- Default: `[]`

Names of additional properties to download when `asVector` is `true`.

By default, only the geometries of the `FeatureCollection` are downloaded. In
order to apply data-driven styling using GeoJsonLayer styling properties, you
need to specify those property names here.

### Render Options

##### `asVector` (Boolean, optional)

- Default: `false`

If `true`, render vector data using the deck.gl `GeoJsonLayer`.

Rendering as vector is only possible for `ee.FeatureCollection` objects; an
error will be produced if `asVector` is set to `true` when another object type
is passed.

When `asVector` is set, the GeoJSON representation of the `FeatureCollection` is
downloaded, which can include very precise geometries. As such, beware of large
downloads: the Earth Engine backend may return no data if the output would be
larger than 100MB.

To reduce the dataset size, use `filter` expressions on the `FeatureCollection`
object before passing it to `EarthEngineLayer`.

##### `animate` (Boolean, optional)

- Default: `false`

If `true`, render an animated ImageCollection.

Rendering an animation is only possible for `ee.ImageCollection` objects; an
error will be produced if `animate` is set to `true` when another object type is
passed.

The `ImageCollection` should be filtered and sorted in the order desired for the
animation. If an `ImageCollection` contains 20 images, the animation will
contain those images as individual frames of the animation, in the same order.
Earth Engine has an upper limit of 100 animation frames.

##### `animationSpeed` (Number, optional)

- Default: `12`

If `animate` is `true`, `animationSpeed` represents the number of frames per
second. Keeping this constant implies that animations will play at the same
speed; an `ImageCollection` with more frames will have a longer loop than one
with fewer frames.


## Source

[modules/earthengine-layers/src/earth-engine-layer](https://github.com/UnfoldedInc/earthengine-layers/tree/master/modules/earthengine-layers/src)
