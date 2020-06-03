# @unfolded.gl/earthengine-layers

This module contains a [deck.gl](https://deck.gl) layer for [Google Earth Engine API objects](https://github.com/google/earthengine-api).

The primary export is the `EarthEngineLayer` layer, which accepts Google Earth Engine API objects (`ee.Image`, `ee.ImageCollection`, `ee.FeatureCollection`) through its `eeObject` prop, and renders the desired datasets via a customized deck.gl `TileLayer`.

For documentation please visit the [website](https://earthengine-layers.com).
