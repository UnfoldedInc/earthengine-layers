# earthengine-layers

[deck.gl](https://deck.gl) layers for Google Earth Engine for JavaScript and
Python.

The primary export is the `EarthEngineLayer` layer, which accepts [Google Earth
Engine API](https://github.com/google/earthengine-api) objects (`ee.Image`,
`ee.ImageCollection`, `ee.FeatureCollection`) through its `eeObject` prop, and
renders the desired datasets via a customized deck.gl `TileLayer`.

## License

MIT License
