import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import {StaticMap} from 'react-map-gl';
import ee from '@google/earthengine';

import {GoogleLoginProvider, GoogleLoginPane} from '../shared';

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
    const {year = '2017'} = this.props;

    // Show hurricane tracks and points for 2017.
    const hurricanes = ee.FeatureCollection('NOAA/NHC/HURDAT2/atlantic');

    const points = hurricanes.filter(ee.Filter.date(ee.Date(year).getRange('year')));

    // Find all of the hurricane ids.
    const storm_ids = points
      .toList(1000)
      .map(point => ee.Feature(point).get('id'))
      .distinct();

    // Create a line for each hurricane.
    const lines = ee.FeatureCollection(
      storm_ids.map(storm_id => {
        const pts = points
          .filter(ee.Filter.eq('id', ee.String(storm_id)))
          .sort('system:time_start');
        const line = ee.Geometry.LineString(pts.geometry().coordinates());
        const feature = ee.Feature(line);
        return feature.set('id', storm_id);
      })
    );

    this.setState({points, lines});
  }

  render() {
    const {points, lines} = this.state;
    const {asVector = true, mapStyle = 'mapbox://styles/mapbox/dark-v9'} = this.props;

    const layers = asVector
      ? [
          new EarthEngineLayer({
            id: 'lines-vector',
            eeObject: lines,
            asVector,
            getLineColor: [255, 0, 0],
            getLineWidth: 1000,
            lineWidthMinPixels: 3
          }),
          new EarthEngineLayer({
            id: 'points-vector',
            eeObject: points,
            asVector,
            getFillColor: [0, 0, 0],
            pointRadiusMinPixels: 3,
            getRadius: 100,
            getLineColor: [255, 255, 255],
            lineWidthMinPixels: 0.5,
            stroked: true
          })
        ]
      : [
          new EarthEngineLayer({
            id: 'lines-raster',
            eeObject: lines,
            visParams: {color: 'red'}
          }),
          new EarthEngineLayer({
            id: 'points-raster',
            eeObject: points,
            visParams: {color: 'black'}
          })
        ];

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
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
