import ee from '@google/earthengine';

promisifyEEAPIs();

export default class EEApi {
  constructor() {
    this.ee = ee;
  }

  async initialize(clientId, token) {
    await this.authenticateViaOuth(clientId);
    await this._initialize();
  }

  // Authenticate using an OAuth pop-up.
  async authenticateViaOuth(clientId, extraScopes = null) {
    return await new Promise((resolve, reject) => {
      ee.data.authenticateViaOauth(
        clientId,
        value => resolve(value),
        error => reject(error),
        extraScopes,
        value => {
          // called if automatic behind-the-scenes authentication fails
          // console.debug('EE authentication opening popup', value);
          ee.data.authenticateViaPopup(resolve, reject);
        }
      );
    });
  }

  // TODO keep? - From github test code
  setToken(token) {
    if (token) {
      ee.apiclient.setAuthToken('', 'Bearer', token, 3600, [], undefined, false);
      ee.apiclient.setCloudApiEnabled(true);
    } else {
      ee.apiclient.setCloudApiEnabled(false);
    }
  }

  // Initialize client library
  async _initialize(baseurl = null, tileurl = null) {
    // TODO initialize seems to need ee to be set on global window object
    // We may be importing in non-standard way...?
    /* global window */
    window.ee = ee;

    return await new Promise((resolve, reject) => {
      ee.initialize(baseurl, tileurl, value => resolve(value), error => reject(error));
    });
  }
}

function promisifyEEAPIs() {
  async function getMapAsync(visParams) {
    return await new Promise((resolve, reject) =>
      // eslint-disable-next-line no-invalid-this
      this.getMap(visParams, (value, error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(value);
      })
    );
  }

  ee.Image.prototype.getMapAsync = getMapAsync;
  ee.ImageCollection.prototype.getMapAsync = getMapAsync;
}
