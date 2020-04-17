import React from 'react';
import {render} from 'react-dom';

import ee from '@google/earthengine';

import DeckGL from '@deck.gl/react';
import {EEApi, EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import {GoogleLoginProvider} from '@unfolded.gl/earthengine-layers';

import {GoogleLoginPane} from '../shared/react-components';
// import {GoogleEarthEngineIcon} from '../shared/react-components';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
// eslint-disable-next-line
const EE_CLIENT_ID = process.env.EE_CLIENT_ID;

export const EARTHENGINE_SCOPES = [
  'https://www.googleapis.com/auth/earthengine',
  'https://www.googleapis.com/auth/cloud-platform'
];

const defaultViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 8,
  pitch: 0,
  bearing: 0
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._onLoginSuccess = this._onLoginSuccess.bind(this);
    this._onViewStateChange = this._onViewStateChange.bind(this);

    this.loginProvider = new GoogleLoginProvider({
      clientId: EE_CLIENT_ID,
      scopes: EARTHENGINE_SCOPES,
      onLoginChange: this._onLoginSuccess
    });

    this.eeApi = new EEApi();

    this.state = {
      viewState: defaultViewState,
      eeImage: null
    };
  }

  async _onLoginSuccess(user, loginProvider) {
    // TODO - called twice, this should not be needed
    if (this.loggedIn) {
      return;
    }
    this.loggedIn = true;

    this.forceUpdate();
    await this.eeApi.initialize(EE_CLIENT_ID); // Client id to your EE application

    const eeImage = ee.Image('CGIAR/SRTM90_V4');
    this.setState({eeImage});
  }

  _onViewStateChange({viewState}) {
    this.setState({viewState});
  }

  render() {
    const layers = this.state.eeImage && [
      new EarthEngineLayer({
        eeObject: this.state.eeImage,
        visParams: {min: 0, max: 255}
      })
    ];

    return (
      <DeckGL
        controller
        onViewStateChange={this._onViewStateChange}
        viewState={this.state.viewState}
        layers={layers}
      >
        <GoogleLoginPane loginProvider={this.loginProvider} />
      </DeckGL>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
