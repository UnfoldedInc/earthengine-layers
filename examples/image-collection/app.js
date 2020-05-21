import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';

import ee from '@google/earthengine';

import {GoogleLoginProvider, GoogleLoginPane} from '../shared';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
const EE_CLIENT_ID = process.env.EE_CLIENT_ID; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: -80.41669,
  latitude: 37.7853,
  zoom: 2,
  pitch: 0,
  bearing: 0
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null};
  }

  componentDidMount() {
    this.loginProvider = new GoogleLoginProvider({
      scopes: ['https://www.googleapis.com/auth/earthengine'],
      clientId: EE_CLIENT_ID,
      onLoginChange: this._onLoginSuccess.bind(this)
    });
  }

  async _onLoginSuccess(user, loginProvider) {
    await EarthEngineLayer.initializeEEApi({clientId: EE_CLIENT_ID});

    const eeObject = ee
      .ImageCollection('NOAA/GFS0P25')
      .filterDate('2018-12-22', '2018-12-23')
      .limit(24)
      .select('temperature_2m_above_ground');

    this.setState({eeObject});
  }

  render() {
    const {eeObject} = this.state;

    const visParams = {
      min: -40.0,
      max: 35.0,
      palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red']
    };

    const layers = [new EarthEngineLayer({eeObject, visParams, animate: true})];

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL controller initialViewState={INITIAL_VIEW_STATE} layers={layers}>
          <GoogleLoginPane loginProvider={this.loginProvider} />
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
