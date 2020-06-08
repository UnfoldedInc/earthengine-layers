# pydeck Integration

The `EarthEngineLayer` can be imported into [`pydeck`](https://pydeck.gl) as a
custom layer module using the `pydeck-earthengine-layers` package, making it
possible to visualize planetary-scale geospatial datasets from Python.

To use this layer, you'll need to authenticate with an EarthEngine-enabled
Google Account. [Visit here][gee-signup] to sign up.

[gee-signup]: https://signup.earthengine.google.com/#!/

## Examples

There are no interactive pydeck examples hosted on this website because the
pydeck `EarthEngineLayer` authentication process requires the user to sign in
with their own credentials in a Python session.

Static Jupyter Notebook examples are available [on nbviewer][nbviewer-examples].
Each notebook corresponds to a JavaScript example viewable on the
[`earthengine-layers` website][ee-layers-js-examples]

[nbviewer-examples]: https://nbviewer.jupyter.org/github/UnfoldedInc/earthengine-layers/tree/master/py/examples/
[ee-layers-js-examples]: https://earthengine-layers.com/examples

## Usage

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
