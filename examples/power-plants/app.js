import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import {StaticMap} from 'react-map-gl';
import ee from '@google/earthengine';

import {GoogleLoginProvider, GoogleLoginPane, InfoBox} from '../shared';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
const EE_CLIENT_ID = process.env.EE_CLIENT_ID; // eslint-disable-line
const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: -53,
  latitude: 36,
  zoom: 3,
  pitch: 0,
  bearing: 0
};

const FUEL_COLOR_MAPPING_VECTOR = {
  Coal: [0, 0, 0],
  Oil: [89, 55, 4],
  Gas: [188, 128, 189],
  Hydro: [5, 101, 166],
  Nuclear: [227, 26, 28],
  Solar: [255, 127, 0],
  Waste: [106, 61, 154],
  Wind: [92, 162, 209],
  Geothermal: [253, 191, 111],
  Biomass: [34, 154, 0]
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null, asVector: true};

    this.loginProvider = new GoogleLoginProvider({
      scopes: ['https://www.googleapis.com/auth/earthengine'],
      clientId: EE_CLIENT_ID,
      onLoginChange: this._onLoginSuccess.bind(this)
    });
  }

  async _onLoginSuccess(user, loginProvider) {
    await EarthEngineLayer.initializeEEApi({clientId: EE_CLIENT_ID});

    const eeObject = ee.FeatureCollection('WRI/GPPD/power_plants');
    this.setState({eeObject});
  }

  render() {
    const {eeObject} = this.state;
    const {mapStyle = 'mapbox://styles/mapbox/dark-v9'} = this.props;

    const layers =
      eeObject &&
      Object.keys(FUEL_COLOR_MAPPING_VECTOR).map((fuel, index) => {
        return new EarthEngineLayer({
          eeObject: eeObject.filter(ee.Filter.eq('fuel1', fuel)),
          getRadius: f => Math.pow(f.properties.capacitymw, 1.35),
          getFillColor: FUEL_COLOR_MAPPING_VECTOR[fuel],
          selectors: ['fuel1', 'capacitymw'],
          asVector: true,
          lineWidthMinPixels: 0.5,
          pointRadiusMinPixels: 2,
          opacity: 0.4,
          id: fuel
        });
      });

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL controller initialViewState={INITIAL_VIEW_STATE} layers={layers}>
          <StaticMap
            reuseMaps
            mapStyle={mapStyle}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />

          <GoogleLoginPane loginProvider={this.loginProvider} />
          <InfoBox title="FeatureCollection">
            The{' '}
            <a href="https://developers.google.com/earth-engine/datasets/catalog/WRI_GPPD_power_plants">
              Global Power Plant Database
            </a>{' '}
            displayed using an <code>ee.FeatureCollection</code> object.
          </InfoBox>
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
