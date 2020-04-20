## Earth Engine Pydeck examples

This folder contains examples for using Pydeck with Google Earth Engine.

### Install

To run the example notebooks locally, you need to install a few Python
dependencies. A custom Conda environment is recommended. To create and enter the
environment, and enable Pydeck with Jupyter Notebook run:

```bash
conda create -n pydeck-ee -c conda-forge python jupyter notebook pydeck earthengine-api requests -y
source activate pydeck-ee
jupyter nbextension install --sys-prefix --symlink --overwrite --py pydeck
jupyter nbextension enable --sys-prefix --py pydeck
```

### Start a notebook

Then to start a notebook, run:

```bash
jupyter notebook Introduction.ipynb
```