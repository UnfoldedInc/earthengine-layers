import ee from '@google/earthengine';

export async function initializeEEApi({clientId, token}) {
  if (token) {
    setToken(token);
  } else {
    await authenticateViaOAuth(clientId);
  }
  await _initialize();
}

// Authenticate using an OAuth pop-up.
async function authenticateViaOAuth(clientId, extraScopes = null) {
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

// Set short-lived Access Token directly
function setToken(token) {
  if (token) {
    ee.apiclient.setAuthToken('', 'Bearer', token, 3600, [], undefined, false);
  }
}

// Initialize client library
async function _initialize(baseurl = null, tileurl = null) {
  // TODO initialize seems to need ee to be set on global window object
  // We may be importing in non-standard way...?
  /* global window */
  window.ee = ee;

  return await new Promise((resolve, reject) => {
    ee.initialize(baseurl, tileurl, value => resolve(value), error => reject(error));
  });
}
