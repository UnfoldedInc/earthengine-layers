## Earth Engine Pydeck examples

This folder contains examples for using Pydeck with Google Earth Engine.

### Install

To run the example notebooks locally, you need to install a few Python
dependencies. A custom Conda environment is recommended. To create and enter the
environment, and enable Pydeck with Jupyter Notebook run:

```bash
conda create -n pydeck-ee -c conda-forge python jupyter jupyterlab notebook pydeck earthengine-api nodejs -y
conda activate pydeck-ee

# Install the pydeck-earthengine-layers package from pip
pip install pydeck-earthengine-layers

# If using Jupyter Notebook:
jupyter nbextension install --sys-prefix --symlink --overwrite --py pydeck
jupyter nbextension enable --sys-prefix --py pydeck

# If using Jupyter Lab
jupyter labextension install @jupyter-widgets/jupyterlab-manager
DECKGL_SEMVER=`python -c "import pydeck; print(pydeck.frontend_semver.DECKGL_SEMVER)"`
jupyter labextension install @deck.gl/jupyter-widget@$DECKGL_SEMVER
```

### Start a notebook

Then to start a notebook with Jupyter Notebook, run:

```bash
jupyter notebook Introduction.ipynb
```

To start a notebook with Jupyter Lab, run:

```bash
jupyter lab Introduction.ipynb
```