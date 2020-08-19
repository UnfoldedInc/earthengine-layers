# Pydeck EarthEngineTerrainLayer

<p class="badges">
  <img src="https://img.shields.io/badge/@unfolded.gl/earthengine--layers-lightgrey.svg?style=flat-square" alt="@unfolded.gl/earthengine-layers" />
</p>

The pydeck `EarthEngineTerrainLayer` connects [Google Earth Engine][gee] to
[pydeck](https://pydeck.gl), making it possible to visualize planetary-scale
geospatial datasets over 3D terrain from Python.

[gee]: https://earthengine.google.com/

To use this layer, you'll need to authenticate with an EarthEngine-enabled
Google Account. [Visit here][gee-signup] to sign up.

[gee-signup]: https://signup.earthengine.google.com/#!/

```py
from pydeck_earthengine_layers import EarthEngineTerrainLayer
import pydeck as pdk
import ee

# Initialize Earth Engine library
ee.Initialize()

# Create Earth Engine objects for visualization and terrain heights
image = ee.Image('USGS/SRTMGL1_003')
terrain = ee.Image('USGS/NED').select('elevation')

# Define Earth Engine visualization parameters
vis_params = {
    "min": 0, 
    "max": 4000,
    'palette': ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
}

# Create a pydeck EarthEngineTerrainLayer object, using the Earth Engine objects and
# desired visualization parameters
ee_layer = EarthEngineTerrainLayer(image, terrain, vis_params)

# Define the initial viewport for the map
view_state = pdk.ViewState(
    latitude=36.15,
    longitude=-111.96,
    zoom=10.5, 
    bearing=-66.16,
    pitch=60)

# Create a Deck instance, and display in Jupyter
r = pdk.Deck(layers=[ee_layer], initial_view_state=view_state)
r.show()
```

## Installation

See the [pydeck integration guide](/docs/developer-guide/pydeck-integration.md)
for installation instructions.

## `EarthEngineTerrainLayer`

The `pydeck-earthengine-layer` package exports the `EarthEngineTerrainLayer`
class. This makes interfacing with EarthEngine easy: behind the scenes it
handles authentication, loading the EarthEngine JavaScript library, and
correctly passing the EarthEngine objects to JavaScript.

### Arguments

- `ee_object`: (_required_), an instance of a Python EarthEngine `Image` object used for visualization
- `ee_terrain_object`: (_required_), an instance of a Python EarthEngine `Image` object used for terrain heights
- `vis_params`: (`dict`, _optional_), parameters for how to visualize the
  EarthEngine object. See [EarthEngine
  documentation](https://developers.google.com/earth-engine/image_visualization)
  for expected `dict` layout. Default: `None`.
- `credentials`: (_optional_), Google OAuth2 credentials object. Default: saved
  credentials are loaded automatically.
- `library_url`: (`str`, _optional_), Force loading of the JavaScript
  `EarthEngineLayer` bundle for a specific URL. By default, loads from the most
  recent `EarthEngineLayer` release.

**All properties accepted by the [JavaScript
`EarthEngineTerrainLayer`](/modules/earthengine-layers/docs/api-reference/earthengine-terrain-layer.md#properties)
are accepted as keyword arguments**.

## Source

[`py/pydeck_earthengine_layers/`](https://github.com/UnfoldedInc/earthengine-layers/tree/master/py/pydeck_earthengine_layers)
