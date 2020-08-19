"""Main module."""

from datetime import datetime, timedelta

import ee
import pydeck as pdk
import requests

EARTHENGINE_LAYER_BUNDLE_URL = 'https://unpkg.com/@unfolded.gl/earthengine-layers@1.2.0/dist/pydeck_layer_module.min.js'


class EarthEngineLayer(pdk.Layer):
    """Wrapper class for using the EarthEngineLayer with Pydeck
    """
    layer_name = 'EarthEngineLayer'

    def __init__(
            self,
            ee_object,
            vis_params=None,
            *,
            credentials=None,
            library_url=EARTHENGINE_LAYER_BUNDLE_URL,
            **kwargs):
        """EarthEngineLayer constructor

        Args:
            - ee_object: Earth Engine object
            - vis_params: Dict of vis_params to pass to the Earth Engine backend
            - credentials: Google OAuth2 credentials object. Saved credentials
              will be loaded if not passed.
            - library_url: URL from which to load EarthEngineLayer JavaScript
              bundle
        """
        super(EarthEngineLayer, self).__init__(
            self.layer_name, None, vis_params=vis_params, **kwargs)

        # Should we assume ee has already been initialized?
        ee.Initialize()

        self._set_custom_library(url=library_url)

        self.credentials = credentials or ee.data.get_persistent_credentials()

        # Initialize token expiration to the past
        self.access_token = None
        self.token_expiration = datetime.now() - timedelta(seconds=1)

        # Define _token as an attribute, so `token` shows up in `vars(class)`
        self._token = self.token

        self.ee_object = ee_object.serialize() if not isinstance(
            ee_object, str) else ee_object

        # This keeps pydeck from serializing these attributes to JS
        # Note: this might be global, but other layers shouldn't depend on these
        # keys
        pdk.bindings.json_tools.IGNORE_KEYS.extend([
            'credentials', 'access_token', 'token_expiration'])

    def _set_custom_library(
            self,
            library_name='EarthEngineLayerLibrary',
            url=EARTHENGINE_LAYER_BUNDLE_URL):
        """Add EarthEngineLayer JS bundle to pydeck's custom libraries
        """
        custom_library = {'libraryName': library_name, 'resourceUri': url}

        if pdk.settings.custom_libraries is None:
            pdk.settings.custom_libraries = [custom_library]
            return

        exists = any([
            x.get('libraryName') == library_name
            for x in pdk.settings.custom_libraries])

        if not exists:
            pdk.settings.custom_libraries.append(custom_library)

    def _refresh_token(self):
        """Retrieve OAuth2 access token using persistent credentials
        """
        data = {
            'client_id': self.credentials.client_id,
            'client_secret': self.credentials.client_secret,
            'refresh_token': self.credentials.refresh_token,
            'grant_type': 'refresh_token'}
        r = requests.post(self.credentials.token_uri, data=data)

        if r.status_code != 200:
            raise ValueError('Unable to fetch access token')

        token_dict = r.json()

        # Set expiration time: expires_in * .9
        # See reference EE API code here:
        # https://github.com/google/earthengine-api/blob/5909d9a19a9b829d49b69f38ac4205b4924b21c9/javascript/src/apiclient.js#L1107
        self.access_token = token_dict['access_token']
        self.token_expiration = datetime.now() + timedelta(
            seconds=token_dict['expires_in'] * .9)

    @property
    def token(self):
        """Load existing access_token, or fetch a new one if expired
        """
        if datetime.now() < self.token_expiration:
            return self.access_token

        self._refresh_token()
        return self.access_token


class EarthEngineTerrainLayer(EarthEngineLayer):
    """Wrapper class for using the EarthEngineTerrainLayer with Pydeck
    """
    layer_name = 'EarthEngineTerrainLayer'

    def __init__(
            self,
            ee_object,
            ee_terrain_object,
            vis_params=None,
            *,
            credentials=None,
            library_url=EARTHENGINE_LAYER_BUNDLE_URL,
            **kwargs):
        """EarthEngineTerrainLayer constructor

        Args:
            - ee_object: Earth Engine object used for image visualization
            - ee_terrain_object: Earth Engine object used for terrain heights
            - vis_params: Dict of vis_params to pass to the Earth Engine backend
            - credentials: Google OAuth2 credentials object. Saved credentials
              will be loaded if not passed.
            - library_url: URL from which to load EarthEngineLayer JavaScript
              bundle
        """
        super(EarthEngineTerrainLayer, self).__init__(
            ee_object=ee_object,
            ee_terrain_object=ee_terrain_object,
            vis_params=vis_params,
            credentials=credentials,
            library_url=library_url,
            **kwargs)

        self.ee_terrain_object = ee_terrain_object.serialize(
        ) if not isinstance(ee_terrain_object, str) else ee_terrain_object
