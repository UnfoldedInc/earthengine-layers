import React from 'react';
import {render} from 'react-dom';

import DeckGL from '@deck.gl/react';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';

import ee from '@google/earthengine';

import {GoogleLoginProvider, GoogleLoginPane, InfoBox} from '../shared';

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

    this.loginProvider = new GoogleLoginProvider({
      scopes: ['https://www.googleapis.com/auth/earthengine'],
      clientId: EE_CLIENT_ID,
      onLoginChange: this._onLoginSuccess.bind(this)
    });
  }

  async _onLoginSuccess(user, loginProvider) {
    await EarthEngineLayer.initializeEEApi({clientId: EE_CLIENT_ID});
    const dataset = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
    const styleParams = {fillColor: 'b5ffb4', color: '00909F', width: 3.0};
    const eeObject = dataset.style(styleParams);
    this.setState({eeObject});
  }

  render() {
    const {eeObject} = this.state;
    const {asVector = false} = this.props;

    const visParams = {};
    const layers = asVector
      ? [
          new EarthEngineLayer({
            eeObject,
            asVector: true,
            getLineColor: [255, 0, 0],
            getLineWidth: 1000,
            lineWidthMinPixels: 3,
            opacity: 0.5
          })
        ]
      : [new EarthEngineLayer({eeObject, visParams, opacity: 0.5})];

    return (
      <div style={{position: 'relative', height: '100%'}}>
        <DeckGL controller initialViewState={INITIAL_VIEW_STATE} layers={layers}>
          <GoogleLoginPane loginProvider={this.loginProvider} />
          <InfoBox title="FeatureCollection">
            The{' '}
            <a href="https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_SIMPLE_2017">
              Large Scale International Boundary Polygons
            </a>{' '}
            dataset displayed using an <code>ee.FeatureCollection</code> object.
          </InfoBox>
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  return render(<App />, container);
}
