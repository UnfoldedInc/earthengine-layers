import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div.attrs({
  className: 'site-title'
})`
  display: flex;
  align-items: center;
  a img {
    height: 48px;
    display: block;
  }
`;

const Logo = () => (
  <StyledLogo>
    <a href="/" title="unfolded" rel="home">
      <img src="./images/title.png" />
    </a>
  </StyledLogo>
);

export default Logo;
