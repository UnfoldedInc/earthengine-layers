import React from 'react';
import {render} from 'react-dom';

import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import ee from '@google/earthengine';

import {DeckWithGoogleMaps, GoogleLoginProvider, GoogleLoginPane, InfoBox} from '../shared';

// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
const EE_CLIENT_ID = process.env.EE_CLIENT_ID; // eslint-disable-line
const GOOGLE_MAPS_TOKEN = process.env.GoogleMapsAPIKey; // eslint-disable-line

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

class Tooltip extends React.Component {
  render() {
    const {hoveredObject, x, y} = this.props;
    return (
      <div
        className="tooltip"
        style={{
          fontFamily: "ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: '13px',
          zIndex: 1000,
          position: 'absolute',
          color: '#a0a7b4',
          backgroundColor: '#29323c',
          padding: '10px',
          left: `${x}px`,
          top: `${y}px`
        }}
      >
        <div>
          <b>Name</b>
        </div>
        <div>
          <div>{hoveredObject.properties.name}</div>
        </div>
        <div>
          <b>Fuel Type</b>
        </div>
        <div>
          <div>{hoveredObject.properties.fuel1}</div>
        </div>
        <div>
          <b>Capacity (MW)</b>
        </div>
        <div>{Math.round(hoveredObject.properties.capacitymw)}</div>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eeObject: null, hoveredObject: null};

    this._onHover = this._onHover.bind(this);

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

  _onHover({x, y, object}) {
    this.setState({x, y, hoveredObject: object});
  }

  render() {
    const {eeObject, x, y, hoveredObject} = this.state;

    const layers =
      eeObject &&
      new EarthEngineLayer({
        eeObject,
        getRadius: f => Math.pow(f.properties.capacitymw, 1.35),
        getFillColor: f => FUEL_COLOR_MAPPING_VECTOR[f.properties.fuel1],
        selectors: ['fuel1', 'capacitymw', 'name'],
        asVector: true,
        lineWidthMinPixels: 0.5,
        pointRadiusMinPixels: 2,
        opacity: 0.4,
        id: 'fuel',
        pickable: true,
        onHover: this._onHover,
        // Prevent z-fighting when pitched
        parameters: {depthTest: false}
      });

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckWithGoogleMaps
          initialViewState={INITIAL_VIEW_STATE}
          id="json-deck"
          layers={layers}
          pickingRadius={10}
          googleMapsToken={GOOGLE_MAPS_TOKEN}
        />
        {hoveredObject && <Tooltip x={x + 2} y={y + 2} hoveredObject={hoveredObject} />}

        <GoogleLoginPane loginProvider={this.loginProvider} />
        <InfoBox title="FeatureCollection">
          The{' '}
          <a href="https://developers.google.com/earth-engine/datasets/catalog/WRI_GPPD_power_plants">
            Global Power Plant Database
          </a>{' '}
          displayed using an <code>ee.FeatureCollection</code> object.
        </InfoBox>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
