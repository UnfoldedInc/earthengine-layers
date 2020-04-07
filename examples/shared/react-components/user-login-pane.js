import React from 'react';
import styled from 'styled-components';

import {Button} from './components';
import UserIcon from './user-icon';

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
export const LoginButton = ({Icon, onLogin, loginButtonColor = 'white'}) => {
  return (
    <Button height={56} onClick={onLogin} style={{backgroundColor: loginButtonColor}}>
      <Icon height={56} />
      <StyledEELogo>
        <img
          height={36}
          src="https://earthengine.google.com/static/images/GoogleEarthEngine_Grey_108.png"
        />
        <div className="login">Login</div>
      </StyledEELogo>
    </Button>
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

const StyledError = styled.div`
  color: red;
  margin-top: 10px;
`;

const ErrorDisplay = ({error}) => (
  <StyledError>
    {getError(error)} : {getErrorDescription(error)}
  </StyledError>
);

const UserPane = ({
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

export default UserPane;
