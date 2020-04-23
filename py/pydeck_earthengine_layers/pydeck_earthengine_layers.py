"""Main module."""

from datetime import datetime, timedelta

import ee
import pydeck as pdk
import requests

EARTHENGINE_LAYER_BUNDLE_URL = 'https://cdn.jsdelivr.net/gh/UnfoldedInc/earthengine-layers@master/modules/earthengine-layers/dist/bundle.js'


class EarthEngineLayer(pdk.Layer):
    """Wrapper class for using the Earth Engine custom layer with Pydeck
    """
    def __init__(self, ee_object, credentials=None, **kwargs):
        """EarthEngineLayer constructor

        Args:
            - ee_object: Earth Engine object
            - vis_params: Dict of vis_params to pass to the Earth Engine backend
            - credentials: Custom credentials. Saved credentials will be loaded
              if not passed.

        """
        super(EarthEngineLayer, self).__init__(
            'EarthEngineLayer', None, **kwargs)

        # Should we assume ee has already been initialized?
        ee.Initialize()

        self._set_custom_library()

        self.credentials = credentials or ee.data.get_persistent_credentials()

        # Initialize token expiration to the past
        self.access_token = None
        self.token_expiration = datetime.now() - timedelta(seconds=1)
        self._token = self.token

        self.ee_object = ee_object.serialize() if not isinstance(
            ee_object, str) else ee_object

        # This keeps pydeck from
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

        # Set expiration time
        self.access_token = token_dict['access_token']
        self.token_expiration = datetime.now() + timedelta(
            seconds=token_dict['expires_in'] - 1)

    @property
    def token(self):
        """Load existing access_token, or fetch a new one if expired
        """
        if datetime.now() < self.token_expiration:
            return self.access_token

        self._refresh_token()
        return self.access_token
