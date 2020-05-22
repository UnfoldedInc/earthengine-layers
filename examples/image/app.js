import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';

import ee from '@google/earthengine';

import {GoogleLoginProvider, GoogleLoginPane, InfoBox} from '../shared';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
const EE_CLIENT_ID = process.env.EE_CLIENT_ID; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: -85,
  latitude: 25,
  zoom: 3,
  pitch: 0,
  bearing: 0
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null};

    this.loginProvider = new GoogleLoginProvider({
      scopes: ['https://www.googleapis.com/auth/earthengine'],
      clientId: EE_CLIENT_ID,
      onLoginChange: this._onLoginSuccess.bind(this)
    });
  }

  async _onLoginSuccess(user, loginProvider) {
    await EarthEngineLayer.initializeEEApi({clientId: EE_CLIENT_ID});
    this.setState({eeObject: ee.Image('CGIAR/SRTM90_V4')});
  }

  render() {
    const {eeObject} = this.state;

    const visParams = {
      min: 0,
      max: 4000,
      palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
    };

    const layers = [new EarthEngineLayer({eeObject, visParams, opacity: 0.5})];

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL controller initialViewState={INITIAL_VIEW_STATE} layers={layers}>
          <GoogleLoginPane loginProvider={this.loginProvider} />
          <InfoBox title="Image">
            Displaying the <code>CGIAR/SRTM90_V4</code> dataset using an ee.ImageObject.
          </InfoBox>
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
