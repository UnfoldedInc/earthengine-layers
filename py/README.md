# pydeck-earthengine-layers

Pydeck wrapper for use with Google Earth Engine

## Install

```bash
pip install pydeck-earthengine-layers
```

This also ensures [pydeck](https://pydeck.gl/) is installed. If you haven't
previously enabled pydeck to be used with Jupyter, follow [its
instructions](https://pydeck.gl/installation.html) to install.

## Using

For an example, see the
[`examples/Introduction.ipynb`](https://raw.githubusercontent.com/UnfoldedInc/earthengine-layers/master/py/examples/Introduction.ipynb) Jupyter Notebook.

## Release notes

To release, bump the version by running:

```bash
bumpversion patch
// or
bumpversion minor
```

Then create a dist bundle with:

```bash
python setup.py sdist
```

Then upload to PyPI with

```bash
twine upload dist/pydeck-earthengine-layers-0.1.0.tar.gz
```

replacing with the current version number.
