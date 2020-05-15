import ee from '@google/earthengine';
import {EarthEngineLayer} from '@unfolded.gl/earthengine-layers';

export function ImageExampleLayers() {
  const eeObject = ee.Image('CGIAR/SRTM90_V4');
  const visParams = {
    min: 0,
    max: 4000,
    palette: ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
  };

  return [new EarthEngineLayer({eeObject, visParams, opacity: 0.5})];
}

export function ImageCollectionExampleLayers() {
  const eeObject = ee
    .ImageCollection('NOAA/GFS0P25')
    .filterDate('2018-12-22', '2018-12-23')
    .limit(48)
    .select('temperature_2m_above_ground');
  const visParams = {
    min: -40.0,
    max: 35.0,
    palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red']
  };
  return [new EarthEngineLayer({eeObject, visParams, animate: true})];
}
