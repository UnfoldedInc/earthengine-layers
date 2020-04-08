# earthengine-layers

> This repository currently contains a proof-of-concept prototype of the `EarthEngineLayer`. currently this layer is not expected to be functional outside of demonstration purposes.

This repository [deck.gl](https://deck.gl) layers for Google Earth Engine.

The primary export is the `EarthEngineLayer` layer, which accepts [Google Earth Engine API](https://github.com/google/earthengine-api) objects (`ee.Object`) as its `data` prop, and renders the satellite data imagery via a customized deck.gl `TileLayer`.

## License

MIT License
