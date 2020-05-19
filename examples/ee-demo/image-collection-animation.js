import React from 'react';
import {render} from 'react-dom';

import ee from '@google/earthengine';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import App from './app';

function ImageCollectionExampleLayers() {
  const eeObject = ee
    .ImageCollection('NOAA/GFS0P25')
    .filterDate('2018-12-22', '2018-12-23')
    .limit(24)
    .select('temperature_2m_above_ground');
  const visParams = {
    min: -40.0,
    max: 35.0,
    palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red']
  };
  return [new EarthEngineLayer({eeObject, visParams, animate: true})];
}

export default function ImageCollectionExample() {
  return <App layersFunction={ImageCollectionExampleLayers} />;
}

export function renderToDOM(container) {
  return render(<ImageCollectionExample />, container);
}
