import React from 'react';
import styled from 'styled-components';

// import EarthEngineIcon from './earthengine-icon';

const StyledPanel = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 250px;
  background: lightgrey;
  z-index: 1000;
  padding: 24px;
  padding-top: 2px;
`;

const StyledEELogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -6px;

  .login {
    margin-left: 9px;
    font-size: 16px;
  }
`;
const InfoBox = ({title = 'Example', children}) => {
  return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <StyledPanel>
        <h2>
          {title} <StyledEELogo />
        </h2>
        {children}
        <br />
        <br />
        <small>
          Note that to run this demo, you need to sign in with an
          <a href="https://earthengine.google.com/new_signup/"> Earth Engine-enabled </a>
          Google Account, and that loading EE data may take some time.
        </small>
      </StyledPanel>
    </div>
  );
};

export default InfoBox;
