import React from 'react';
import document from 'global/document';
import {render} from 'react-dom';

import ee from '@google/earthengine';

import DeckGL from '@deck.gl/react';
import {EEApi, EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
// import {GoogleLoginProvider} from '@unfolded.gl/earthengine-layers';

import {UserLoginPane} from '../../shared/react-components';
// import {GoogleEarthEngineIcon} from '../shared/react-components';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
// eslint-disable-next-line
const EE_CLIENT_ID = process.env.EE_CLIENT_ID;

const defaultViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 8,
  pitch: 0,
  bearing: 0
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.eeApi = new EEApi();

    this.state = {
      viewState: defaultViewState
    };

    this._onLoginSuccess = this._onLoginSuccess.bind(this);
    this._onViewStateChange = this._onViewStateChange.bind(this);
  }

  async _onLoginSuccess(providerName, googleUser, user) {
    await this.eeApi.initialize(EE_CLIENT_ID); // Client id to your EE application
  }

  _onEEInitialized() {
    const eeImage = ee.Image('CGIAR/SRTM90_V4');
    this.setState({eeImage});
  }

  _onViewStateChange({viewState}) {
    this.setState({viewState});
  }

  render() {
    const layers = [
      new EarthEngineLayer({
        data: this.state.eeImage,
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
        <UserLoginPane onLoginSuccess={this._onLoginSuccess} />
      </DeckGL>
    );
  }
}

render(<App />, document.body.appendChild(document.createElement('div')));
