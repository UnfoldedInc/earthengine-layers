import React from 'react';
import styled from 'styled-components';

import {Button} from './components';
import UserIcon from './user-icon';

const BlackButton = styled(Button)`
  padding: 6px 32px;
  color: #fff;
  /* background-color: #000; */
  /* :hover,
  :focus,
  :active,
  &.active {
    background-color: #555;
  } */
`;

const NarrowButton = styled(BlackButton)`
  padding: 6px 6px;
`;

export const LoginButton = ({Icon, onLogin, loginButtonColor = 'grey'}) => {
  return (
    <Button width="120px" onClick={onLogin} style={{backgroundColor: loginButtonColor}}>
      <Icon height={42} />
      Login
    </Button>
  );
};

const LoggedInUser = ({user, href, target, iconHeight}) => (
  <NarrowButton onClick={() => {}}>
    <a type="button" href={href} value={target} target={target}>
      <UserIcon user={user} email={true} isDark />
    </a>
  </NarrowButton>
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
