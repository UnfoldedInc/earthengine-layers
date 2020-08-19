# What's New

## v1.2.0 - (2020-08-19)

- `EarthEngineTerrainLayer` available in pydeck
- Improved tile request strategies to prevent EarthEngine tile load failures
- Bump `earthengine-api` dependency to `^0.1.230`.

## v1.1.1 - (2020-08-13)

- Update `loaders.gl` to a 2.3.0 alpha release to fix a bundling issue for pydeck

## v1.1.0 - (2020-08-05)

- New `EarthEngineTerrainLayer`
- Updated python installation docs to reflect Conda-forge package
- Use Google Maps as a basemap for website examples
- Update to deck.gl 8.2

## v1.0.0 - (2020-06-08)

First major version release to NPM, PyPI, and Conda-forge.

The `EarthEngineLayer` in JavaScript and Python allows for rendering Earth
Engine API objects in deck.gl. The `animate` and `asVector` props allow for rich
rendering of `ee.ImageCollection` objects as animations and of
`ee.FeatureCollection` objects with rich client-side data-driven vector styling.
