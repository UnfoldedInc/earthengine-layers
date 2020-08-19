# Changelog

## 1.2.0 (2020-08-19)

- New `EarthEngineTerrainLayer` exposed through Pydeck. Allows for visualizing EarthEngine `Image` objects over 3D terrain
- Reduced positional arguments. For the `EarthEngineLayer`, only `ee_object` and `vis_params` may be positional arguments; all others must be keyword arguments. For the `EarthEngineTerrainLayer`, only `ee_object`, `ee_terrain_object`, and `vis_params` may be positional arguments; all others must be keyword arguments.
- Various JavaScript-side improvements, which trickle down to Pydeck. See [What's New](/docs/whats-new) for more information.

## 1.1.0

Skipped to maintain identical versions as JS bundle

## 1.0.1 (2020-08-06)

- Pin JS bundle used by pydeck to `1.0.0`, since `1.1.0` upgrades the TileLayer to deck.gl 8.2 and is currently broken.

## 1.0.0 (2020-06-05)

- Release in conjunction with NPM 1.0 release.

## 0.2.2 (2020-06-05)

- Update Python module to point to _beta_ NPM module via unpkg for now

## 0.2.1 (2020-06-04)

- Update Python module to point to released NPM module via unpkg, instead of serving directly from Github. #77

## 0.2.0 (2020-05-26)

- Set `vis_params` as the second positional argument #56
- Use a minified bundle #51
- Option to set a custom EE Layer bundle url #31

## 0.1.1 (2020-04-27)

- Include `requirements.txt` and `requirements_dev.txt` in `MANIFEST.in` to fix install.

## 0.1.0 (2020-04-23)

- First release on PyPI.
