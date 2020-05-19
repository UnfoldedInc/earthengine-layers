import React from 'react';
import {render} from 'react-dom';

import ee from '@google/earthengine';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';
import App from './app';

function renderImageExampleLayers() {
  const eeObject = ee.Image('CGIAR/SRTM90_V4');
  const visParams = {
    min: 0,
    max: 4000,
    palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
  };

  return [new EarthEngineLayer({eeObject, visParams, opacity: 0.5})];
}

export default function ImageExample() {
  return <App layersFunction={renderImageExampleLayers} />;
}

export function renderToDOM(container) {
  return render(<ImageExample />, container);
}
