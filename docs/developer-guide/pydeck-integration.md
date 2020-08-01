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

To install dependencies from the Python Package Index (PyPI):

```bash
pip install earthengine-api pydeck pydeck-earthengine-layers
```

`pydeck-earthengine-layers` is also available on [Conda](https://anaconda.org/conda-forge/pydeck-earthengine-layers). If you use Conda for package
management, you may install `earthengine-api`, `pydeck` and `pydeck-earthengine-layers` from `conda-forge`:

```bash
conda install -c conda-forge earthengine-api pydeck pydeck-earthengine-layers
```

### Enable with Jupyter

After installing `pydeck`, you **must also enable it for use with Jupyter**. The
following is a short overview; for more information, see the [pydeck
documentation][pydeck-enable-jupyter].

[pydeck-enable-jupyter]: https://pydeck.gl/installation.html#enabling-pydeck-for-jupyter

**Jupyter Notebook**

To use with Jupyter Notebook, first make sure Jupyter Notebook is installed:

```bash
conda install -c conda-forge jupyter notebook
```

Then to enable pydeck with Jupyter Notebook, run

```bash
jupyter nbextension install --sys-prefix --symlink --overwrite --py pydeck
jupyter nbextension enable --sys-prefix --py pydeck
jupyter nbextension install @deck.gl/jupyter-widget@$DECKGL_SEMVER
```

**Jupyter Lab**

To use with Jupyter Lab, first make sure that Jupyter Lab is installed:
(`nodejs` is necessary to install Jupyter Lab extensions):

```bash
conda install -c conda-forge jupyter jupyterlab nodejs
```

Then to enable pydeck with Jupyter Lab, run

```bash
jupyter labextension install @jupyter-widgets/jupyterlab-manager
DECKGL_SEMVER=`python -c "import pydeck; print(pydeck.frontend_semver.DECKGL_SEMVER)"`
jupyter labextension install @deck.gl/jupyter-widget@$DECKGL_SEMVER
```

Note that only Jupyter Lab version 1.x is currently supported. Jupyter Lab
version 2.0 and greater are expected to be supported in the upcoming  pydeck
0.4.0 release.
