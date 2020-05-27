import React from 'react';
import styled from 'styled-components';

// import EarthEngineIcon from './earthengine-icon';

const StyledPanel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 344px;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  margin: 24px;
  font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 15px;
  z-index: 1000;
  padding: 12px 24px;
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
        <h3>
          {title} <StyledEELogo />
        </h3>
        {children}
        <p>
          <small>
            To run this demo, you need to sign in with an{' '}
            <a href="https://earthengine.google.com/signup/">Earth Engine-enabled</a> Google
            Account. Loading EE data may take some time.
          </small>
        </p>
      </StyledPanel>
    </div>
  );
};

export default InfoBox;
