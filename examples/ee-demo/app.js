import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EEApi} from '@unfolded.gl/earthengine-layers';
import {GoogleLoginProvider} from '@unfolded.gl/earthengine-layers';

import {GoogleLoginPane} from '../shared/react-components';
// import {GoogleEarthEngineIcon} from '../shared/react-components';
import {ImageExampleLayers, ImageCollectionExampleLayers} from './examples';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
// eslint-disable-next-line
const EE_CLIENT_ID = process.env.EE_CLIENT_ID;

export const EARTHENGINE_SCOPES = ['https://www.googleapis.com/auth/earthengine'];

const defaultViewState = {
  longitude: -80.41669,
  latitude: 37.7853,
  zoom: 2,
  pitch: 0,
  bearing: 0
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._onLoginSuccess = this._onLoginSuccess.bind(this);

    this.loginProvider = new GoogleLoginProvider({
      clientId: EE_CLIENT_ID,
      scopes: EARTHENGINE_SCOPES,
      onLoginChange: this._onLoginSuccess
    });

    this.eeApi = new EEApi();

    this.state = {loggedIn: false};
  }

  async _onLoginSuccess(user, loginProvider) {
    // TODO - called twice, this should not be needed
    const {loggedIn} = this.state;
    if (loggedIn) {
      return;
    }

    this.forceUpdate();
    // Client id to your EE application
    await this.eeApi.initialize({clientId: EE_CLIENT_ID});
    // Must be after initialization
    this.setState({loggedIn: true});
  }

  render() {
    const {exampleName = 'imagecollection'} = this.props;
    const {loggedIn} = this.state;

    let layers;
    if (loggedIn) {
      switch (exampleName.toLowerCase()) {
        case 'image':
          layers = ImageExampleLayers();
          break;
        case 'imagecollection':
          layers = ImageCollectionExampleLayers();
          break;
        default:
          break;
      }
    }

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL controller initialViewState={defaultViewState} layers={layers}>
          <GoogleLoginPane loginProvider={this.loginProvider} />
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
