import React, {useCallback, useState} from 'react';
import styled from 'styled-components';

import EarthEngineIcon from './earthengine-icon';

const StyledPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 24px;
`;

const Button = styled.div.attrs({
  className: 'button'
})`
  align-items: center;
  background-color: white;
  border-radius: 6px;
  color: #000000;
  font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;
  cursor: pointer;
  display: inline-flex;
  font-size: 11px;
  justify-content: center;
  letter-spacing: 0.3px;
  line-height: 12px;
  outline: 0;
  text-align: center;
  transition: all 0.4s ease;
  vertical-align: middle;
  width: ${props => props.width || 'auto'};
  padding: 0;
  border-radius: ${props => `${props.height / 2}px` || 'auto'};

  :hover,
  :focus,
  :active,
  &.active {
    background-color: #e2e2e2;
  }
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

const StyledLoggedInUser = styled.div.attrs({
  className: 'logged-in-user'
})`
  display: flex;
  align-items: center;

  .email {
    transition: width 0.8s ease, margin 0.8s ease;
    width: 0;
    margin: 0;
    overflow: hidden;
  }

  :hover {
    .email {
      width: auto;
      margin: 0 12px;
    }
  }
`;

const StyledError = styled.div`
  color: red;
  margin-top: 10px;
`;

const UserIcon = ({user, email, height = 36}) => {
  if (!user) {
    return null;
  }

  return (
    <StyledLoggedInUser>
      <img
        src={user.imageUrl}
        alt={user.email}
        width={height}
        height={height}
        style={{borderRadius: '50%'}}
      />
      {email ? <div className="email">{user.email}</div> : null}
    </StyledLoggedInUser>
  );
};

const LoggedInUser = ({user, href, target, iconHeight}) => (
  <Button onClick={() => {}} height={36}>
    <UserIcon height={36} user={user} email={true} isDark />
  </Button>
);

// TODO - move this insane function into the UserAccount class?
function getError(err) {
  if (!err) {
    return 'Something went wrong';
  }

  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  } else if (typeof err === 'object') {
    return err.error
      ? getError(err.error)
      : err.err
        ? getError(err.err)
        : err.message
          ? getError(err.message)
          : JSON.stringify(err);
  }

  return null;
}

function getErrorDescription(err = {}) {
  return typeof err.error_description === 'string' ? err.error_description : '';
}

const ErrorDisplay = ({error}) => (
  <StyledError>
    {getError(error)} : {getErrorDescription(error)}
  </StyledError>
);

const LoginButton = ({Icon, onLogin, loginButtonColor = 'white'}) => {
  return (
    <Button height={56} onClick={onLogin} style={{backgroundColor: loginButtonColor}}>
      <Icon height={56} />
      <StyledEELogo>
        <img
          alt="EE"
          height={36}
          src="https://earthengine.google.com/static/images/GoogleEarthEngine_Grey_108.png"
        />
        <div className="login">Login</div>
      </StyledEELogo>
    </Button>
  );
};

const LoginPane = ({
  user,
  Icon,
  iconHeight,
  loginButtonColor,
  onLogin,
  href,
  target = '_blank',
  error
}) => {
  return (
    <div style={{display: 'flex', align: 'center', flexDirection: 'column'}}>
      {user ? (
        <LoggedInUser user={user} iconHeight={iconHeight} href={href} target={target} />
      ) : (
        <LoginButton Icon={Icon} onLogin={onLogin} loginButtonColor={loginButtonColor} />
      )}
      {error ? <ErrorDisplay error={error} /> : null}
    </div>
  );
};

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

  if (!loginProvider) {
    return <div />;
  }

  return (
    <StyledPanel>
      <LoginPane
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
