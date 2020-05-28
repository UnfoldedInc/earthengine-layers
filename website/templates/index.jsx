import React from 'react';
import {Home} from 'gatsby-theme-ocular/components';
// import GLTFExample from './example-gltf'; TODO Add EEDemo
import styled from 'styled-components';

if (typeof window !== 'undefined') {
  window.website = true;
}

const Bullet = styled.li`
  background: url(images/icon-high-precision.svg) no-repeat left top;
  list-style: none;
  max-width: 540px;
  padding: 8px 0 12px 42px;
  font: ${(props) => props.theme.typography.font300};
`;

const HeroExample = () => (
  <div
    style={{
      height: '100%',
      backgroundImage: 'url(images/image-animation-wide_less-bright.gif)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>
);

export default class IndexPage extends React.Component {
  render() {
    return (
      <Home HeroExample={HeroExample}>
        <ul>
          <Bullet>deck.gl layers for the Google Earth Engine API.</Bullet>
          <Bullet>Effortlessly visualize planetary scale satellite data.</Bullet>
          <Bullet>Python and Jupyter Notebook supported via pydeck.</Bullet>
        </ul>
      </Home>
    );
  }
}
