import React, {useCallback, useState} from 'react';
import styled from 'styled-components';

import EarthEngineIcon from './earthengine-icon';
import UserLoginPane from './user-login-pane';

const StyledPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 24px;
`;
/**
 * TODO - this is a module, replace with typescript defs
 * @param {object} props
 * @param {any} loginProvider
 * @param {number} props.iconHeight
 * @param {string} [props.loginButtonColor]
 */
const GoogleLoginPane = ({loginProvider, iconHeight, loginButtonColor}) => {
  const [error, setError] = useState(null);
  const onLogin = useCallback(
    () => {
      try {
        loginProvider.login({prompt: 'login'});
        setError(null);
      } catch (err) {
        setError(err);
      }
    },
    [loginProvider]
  );

  return (
    <StyledPanel>
      <UserLoginPane
        user={loginProvider.user}
        onLogin={onLogin}
        iconHeight={iconHeight}
        loginButtonColor={loginButtonColor}
        Icon={EarthEngineIcon}
        href="https://earthengine.google.com/"
        target="_blank"
        error={error}
      />
    </StyledPanel>
  );
};

export default GoogleLoginPane;
