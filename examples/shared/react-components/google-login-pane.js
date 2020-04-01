import React, {useCallback, useState} from 'react';
import EarthEngineIcon from './earthengine-icon';
import UserLoginPane from './user-login-pane';

/**
 * TODO - this is a module, replace with typescript defs
 * @param {object} props
 * @param {any} account
 * @param {number} props.iconHeight
 * @param {string} [props.loginButtonColor]
 */
const UnfoldedUserLoginPane = ({account, iconHeight, loginButtonColor}) => {
  const [error, setError] = useState(null);
  const onLogin = useCallback(
    () => {
      try {
        account.login({prompt: 'login'});
        setError(null);
      } catch (err) {
        setError(err);
      }
    },
    [account]
  );

  return (
    <UserLoginPane
      user={account.user}
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

export default UnfoldedUserLoginPane;
