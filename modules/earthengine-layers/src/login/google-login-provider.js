/* eslint-disable camelcase */
/* global gapi */
import {
  loadGapi,
  loadGapiClient,
  initGapiClient,
  auth2Initialize,
  auth2Authorize,
  auth2GetUserInfo
} from './google-api';

// TODO - we need to choose. Can't use auth2.init/auth2.signIn and auth2.authorize at the same time
const USE_AUTH2_AUTHORIZE = false;

const cache = {};

function probe(message, ...args) {
  if (!cache[message]) {
    cache[message] = true;
    // eslint-disable-next-line
    console.debug((performance.now() / 1000).toFixed(2), message, ...args);
  }
}

const defaultProps = {
  // gapi.client
  // discoveryDocs,

  // gapi.auth2
  // clientId,
  // scope: '',
  // scopes: [],
  accessType: 'online',
  prompt: '',
  cookiePolicy: 'single_host_origin',
  fetchBasicProfile: true,
  uxMode: 'popup',

  // eslint-disable-next-line
  onLoginChange: user => {}
};

export default class GoogleLoginProvider {
  // Normalize a google user object
  static normalizeUser(googleUser, authResponse = null) {
    if (googleUser && googleUser.getBasicProfile) {
      authResponse = authResponse || googleUser.getAuthResponse(true);
      return normalizeUserProfile(googleUser, authResponse);
    }
    if (googleUser && googleUser.picture) {
      return normalizeUserInfo(googleUser, authResponse);
    }
    return googleUser;
  }

  // Create a new GoogleLoginProvider
  // Notes:
  // = To access Google Drive, specify it in scopes
  // @param scopes = ['https://www.googleapis.com/auth/drive'];

  constructor(props) {
    this.props = {
      ...defaultProps,
      ...props
    };
    this.props.scope = this.props.scope || this.props.scopes.join(' ');
    delete this.props.scopes;

    this.signedIn = false;
    this.user = null;

    // "Start loading" the google API
    this._initialize();

    this._setUser(null);
    this._checkIfLoggedIn();
  }

  /**
   * This method will handle the oauth flow by performing the following steps:
   * - Opening a popup window and letting the user select google account
   * - If already signed in to the browser, the window will disappear immediately
   * @returns {Promise<USer>}
   */
  async login(options) {
    await this._initialize();

    // Check if auto sign in happened
    if (this.signedIn) {
      return this.user;
    }

    return USE_AUTH2_AUTHORIZE
      ? await this._loginViaAuthorize(options)
      : await this._loginViaSignIn(options);
  }

  async logout() {
    if (!USE_AUTH2_AUTHORIZE) {
      await this._logoutViaSignOut();
    }
  }

  setAccessToken(access_token, id_token) {
    // access_token is used to authenticate google services
    gapi.auth2.setToken(access_token);
    // id_token is used to authenticate application services
    this.idToken = id_token;
    // TODO - call callback
  }

  // Provides the current auth token.
  getAccessToken() {
    const token = this.accessToken;
    return (token || '') !== '' ? token : null;
  }

  // PRIVATE

  _checkIfLoggedIn() {
    if (USE_AUTH2_AUTHORIZE) {
      // Attempt immediate login via gapi.auth2.authorize
      this.login({prompt: 'none'});
    } else {
      // Initialize will init auth...
      this._initialize();
    }
  }

  // Initialize the Google API (gapi) by loading it dynamically and initializing with appropriate scope
  // TODO - https://stackoverflow.com/questions/15657983/popup-blocking-the-gdrive-authorization-in-chrome
  // Ensure we call async initialization code only once
  async _initialize() {
    probe('gapi script loading...');

    await loadGapi();
    probe('gapi script loaded');

    await loadGapiClient();
    probe('gapi client loaded');

    // Initialize the JavaScript client library.
    const {discoveryDocs} = this.props;
    await initGapiClient({discoveryDocs});
    probe('gapi client initialized');

    // optionally init gapi.auth2 (since we can't use auth2.init and auth2.authorize at the same time)
    if (!USE_AUTH2_AUTHORIZE) {
      await this._initializeAuth2();
    }
  }

  async _initializeAuth2() {
    let user = null;

    const authOptions = getAuthOptionsFromProps(this.props);
    const authResponse = await auth2Initialize(authOptions); // Only options from first call take effect..Initialize.
    if (authResponse.isSignedIn.get()) {
      const googleUser = authResponse.currentUser.get();
      user = GoogleLoginProvider.normalizeUser(googleUser);
    }

    this._listenToLoginStatus();
    probe('gapi auth2 initialized');

    if (user) {
      probe('Auto sign-in detected', user);
      this._setUser(user);
    }
  }

  // Set (or clear) user data
  _setUser(user) {
    const oldUser = this.user;

    this.signedIn = Boolean(user);
    this.user = user;

    if (oldUser !== user && oldUser !== undefined) {
      // console.log('GOOGLE ACCOUNT USER CHANGE', user); // eslint-disable-line
      this.props.onLoginChange(user, this);
    }
  }

  // OPTION 1: PRIVATE METHODS FOR AUTHORIZE FLOW

  // The advanced login flow, using:
  //   gapi.auth2.authorize()
  // Allows signin calls with multiple client_ids, different options, etc
  //
  // Note: gapi could potentially be initialized by other parts of kepler (in particular, by other cloud providers)
  // To fully handle that case we likely need to use the advanced gapi authentication API,
  // as the recommended API only supports one sign-in.

  async _loginViaAuthorize(options) {
    await this._initialize();

    const authOptions = {...getAuthOptionsFromProps(this.props), ...options};

    // eslint-disable-next-line
    console.log('gapi.client.authorize with options', authOptions);

    const authResponse = await auth2Authorize(authOptions);

    probe('gapi auth2 authorized');

    // TODO - `auth2.currentUser` is only available when calling gapi.auth2.init...
    // We need to fetch the user data directly from google instead.
    const userInfo = await auth2GetUserInfo(authResponse);
    const user = GoogleLoginProvider.normalizeUser(userInfo, authResponse);

    // console.log('GOOGLE ACCOUNT LOGIN SUCCESS (AUTHORIZE)', authResponse, user); // eslint-disable-line

    probe('gapi user data received', user);
    this._setUser(user);
  }

  _logoutViaAuthorize() {
    // TODO - no idea how to do this
  }

  // OPTION 2: PRIVATE METHODS FOR "SIGNIN" FLOW

  // The simpler login flow, using:
  //   gapi.auth2.init(), gapi.auth2.signIn(), ...
  async _loginViaSignIn(options, responseType) {
    await this._initialize();

    // Offline access
    if (responseType === 'code') {
      return await gapi.auth2.grantOfflineAccess(options);
    }

    // NOTE: We are not using async/await syntax here because:
    // - babel's "heavy-handed" transpilation of `async/await` moves this code into a callback
    // - but it needs to run directly in the `onClick` handler since it opens a popup
    // - and popups that are not a direct result of the user's actions are typically blocked by browser settings.
    return await gapi.auth2
      .getAuthInstance()
      .signIn(options)
      .then(googleUser => {
        const user = GoogleLoginProvider.normalizeUser(googleUser);
        this._setUser(user);
        return user;
      })
      .catch(error => {
        console.error('GOOGLE ACCOUNT LOGIN ERROR', error); // eslint-disable-line
      });
  }

  async _logoutViaSignOut() {
    const authInstance = gapi && gapi.auth2 && gapi.auth2.getAuthInstance();
    if (authInstance) {
      await authInstance.signOut();
      await authInstance.disconnect();
    }
  }

  // Set up a listener for logout
  _listenToLoginStatus() {
    // For APIKEY, no authinstance is provided
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance) {
      return;
    }

    // LISTEN FOR LOGIN
    authInstance.isSignedIn.listen(isSignedIn => {
      if (isSignedIn) {
        // NOTE: This is only triggered on fresh login.
        // I.e. signIn() does not trigger this if browser is already logged in
        console.log('GOOGLE API LOGIN DETECTED'); // eslint-disable-line
      } else {
        console.log('GOOGLE API LOGOUT DETECTED'); // eslint-disable-line
        this._setUser(null);
        // Call callback
        this.props.onLoginChange(null);
      }
    });
  }
}

// LOCAL HELPERS

// Normalizes "manually" queries user data (when using gapi.auth2.authorize)
function normalizeUserInfo(userInfo, authResponse) {
  return {
    email: userInfo.email,
    domain: userInfo.hd,
    imageUrl: userInfo.picture, // Picture seems to be of different size in this path

    name: userInfo.name,
    givenName: userInfo.given_name,
    familyName: userInfo.family_name,

    // TODO - granted scopes?
    scopes: [],

    accessToken: authResponse.access_token,
    idToken: authResponse.id_token
  };
}

// Normalizes user data from the GoogleUser object (when using gapi.auth2.signin)
function normalizeUserProfile(googleUser, authResponse) {
  const userProfile = googleUser.getBasicProfile();

  // Normalize user data (idea is common format across identity providers)
  return {
    email: userProfile && userProfile.getEmail(),
    domain: googleUser.getHostedDomain(),
    imageUrl: userProfile && userProfile.getImageUrl(),

    name: userProfile && userProfile.getName(),
    givenName: userProfile && userProfile.getGivenName(),
    familyName: userProfile && userProfile.getFamilyName(),

    scopes: googleUser && googleUser.getGrantedScopes().split(' '),

    accessToken: authResponse.access_token,
    idToken: authResponse.id_token
  };
}

function getAuthOptionsFromProps(props) {
  return {
    access_type: props.accessType,
    client_id: props.clientId,
    cookie_policy: props.cookiePolicy,
    login_hint: props.loginHint,
    scope: props.scope,
    hosted_domain: props.hostedDomain,
    fetch_basic_profile: props.fetchBasicProfile,
    ux_mode: props.uxMode,
    redirect_uri: props.redirectUri
  };
}
