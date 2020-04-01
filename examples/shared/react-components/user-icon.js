import React from 'react';
import styled from 'styled-components';

const StyledLoggedInImage = styled.img.attrs({
  className: 'logged-in-image',
  width: 72,
  height: 72
})`
  border-radius: 50%;
  transform: scale(0.5);
  /* TODO - hack, figure out why this is needed */
  margin-left: -22px;
`;

const StyledLoggedInUser = styled.div.attrs({
  className: 'logged-in-user'
})`
  display: flex;
  align-items: center;
  height: 42px;
`;

const UserIcon = ({user, email, isDark}) => {
  if (!user) {
    return null;
  }

  return (
    <StyledLoggedInUser style={isDark ? {color: '#fff'} : {color: '#000'}}>
      <StyledLoggedInImage src={user.imageUrl} />
      {email ? user.email : ''}
    </StyledLoggedInUser>
  );
};

export default UserIcon;
