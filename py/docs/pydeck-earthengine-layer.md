# Pydeck EarthEngineLayer

<p class="badges">
  <img src="https://img.shields.io/badge/@unfolded.gl/earthengine--layers-lightgrey.svg?style=flat-square" alt="@unfolded.gl/earthengine-layers" />
</p>

The pydeck `EarthEngineLayer` connects [Google Earth Engine][gee] to
[pydeck](https://pydeck.gl), making it possible to visualize planetary-scale
geospatial datasets from Python.

[gee]: https://earthengine.google.com/

To use this layer, you'll need to authenticate with an EarthEngine-enabled
Google Account. [Visit here][gee-signup] to sign up.

[gee-signup]: https://signup.earthengine.google.com/#!/

```py
from pydeck_earthengine_layers import EarthEngineLayer
import pydeck as pdk
import ee

# Initialize Earth Engine library
ee.Initialize()

# Create an Earth Engine object
image = ee.Image('CGIAR/SRTM90_V4')

# Define Earth Engine visualization parameters
vis_params = {
    "min": 0, 
    "max": 4000,
    'palette': ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
}

# Create a pydeck EarthEngineLayer object, using the Earth Engine object and
# desired visualization parameters
ee_layer = EarthEngineLayer(image, vis_params)

# Define the initial viewport for the map
view_state = pdk.ViewState(latitude=37.7749295, longitude=-122.4194155, zoom=10, bearing=0, pitch=45)

# Create a Deck instance, and display in Jupyter
r = pdk.Deck(layers=[ee_layer], initial_view_state=view_state)
r.show()
```

## Installation

To install the dependencies from the Python Package Index (PyPI):

```bash
pip install earthengine-api pydeck pydeck-earthengine-layers
```

`pydeck-earthengine-layers` is not on Conda. If you use Conda for package
management, you may install `earthengine-api` and `pydeck` from `conda-forge`,
then `pydeck-earthengine-layers` using `pip`:

```
conda install -c conda-forge earthengine-api pydeck
pip install pydeck-earthengine-layers
```

### Enable with Jupyter

After installing `pydeck`, you **must also enable it for use with Jupyter**. See
the [pydeck documentation][pydeck-enable-jupyter] for instructions.

[pydeck-enable-jupyter]: https://pydeck.gl/installation.html#enabling-pydeck-for-jupyter

## `EarthEngineLayer`

The `pydeck-earthengine-layer` package exports a single object: the
`EarthEngineLayer` class. This layer makes working with EarthEngine easy: behind
the scenes it handles authentication, loading the EarthEngine JavaScript
library, and correctly passing the EarthEngine objects to JavaScript.

### Arguments

- `ee_object`: (_required_), an instance of a Python EarthEngine object, such as
  an `ee.Image`, `ee.ImageCollection`, `ee.FeatureCollection`, etc.
- `vis_params`: (`dict`, _optional_), parameters for how to visualize the
  EarthEngine object. See [EarthEngine
  documentation](https://developers.google.com/earth-engine/image_visualization)
  for expected `dict` layout. Default: `None`.
- `credentials`: (_optional_), Google OAuth2 credentials object. Default: saved
  credentials are loaded automatically.
- `library_url`: (`str`, _optional_), Force loading of the JavaScript
  `EarthEngineLayer` bundle for a specific URL. By default, loads from the most
  recent `EarthEngineLayer` release.

All properties accepted by the [JavaScript
`EarthEngineLayer`](/modules/earthengine-layers/docs/api-reference/earthengine-layer.md#properties)
are accepted as keyword arguments. So, for example, to animate an
`ee.ImageCollection` from Python, you can pass 

```py
EarthEngineLayer(ee.ImageCollection(...), animate=True)
```

## Source

[`py/pydeck_earthengine_layers/`](https://github.com/UnfoldedInc/earthengine-layers/tree/master/py/pydeck_earthengine_layers)
