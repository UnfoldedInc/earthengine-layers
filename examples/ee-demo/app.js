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
    // Client id to your EE application
    await this.eeApi.initialize({clientId: EE_CLIENT_ID});

    // const eeImage = ee.Image('CGIAR/SRTM90_V4').serialize();
    const eeImage = ee
      .ImageCollection('NOAA/GFS0P25')
      .filterDate('2018-12-22', '2018-12-23')
      .limit(24)
      .select('temperature_2m_above_ground');
    // const eeImage = ee.Deserializer.fromJSON(
    //   ee
    //     .ImageCollection('NOAA/GFS0P25')
    //     .filterDate('2018-12-22', '2018-12-23')
    //     .limit(24)
    //     .select('temperature_2m_above_ground')
    //     .serialize()
    // );
    this.setState({eeImage});
  }

  _onViewStateChange({viewState}) {
    this.setState({viewState});
  }

  render() {
    const layers = this.state.eeImage && [
      new EarthEngineLayer({
        eeObject: this.state.eeImage,
        // visParams: {min: 0, max: 255},
        visParams: {
          min: -40.0,
          max: 35.0,
          palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red']
        },
        opacity: 0.5
      })
    ];

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL
          controller
          onViewStateChange={this._onViewStateChange}
          viewState={this.state.viewState}
          layers={layers}
        >
          <GoogleLoginPane loginProvider={this.loginProvider} />
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
