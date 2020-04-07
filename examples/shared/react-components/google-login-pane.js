import React, {useCallback, useState} from 'react';
import EarthEngineIcon from './earthengine-icon';
import UserLoginPane from './user-login-pane';

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
    <UserLoginPane
      user={loginProvider.user}
      onLogin={onLogin}
      iconHeight={iconHeight}
      loginButtonColor={loginButtonColor}
      Icon={EarthEngineIcon}
      href="http://www.unfolded.ai/data?login"
      target="unfolded"
      error={error}
    />
  );
};

export default GoogleLoginPane;
