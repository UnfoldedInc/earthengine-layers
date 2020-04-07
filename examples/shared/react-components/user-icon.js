import React from 'react';
import styled from 'styled-components';

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

const UserIcon = ({user, email, height = 36}) => {
  if (!user) {
    return null;
  }

  return (
    <StyledLoggedInUser>
      <img src={user.imageUrl} width={height} height={height} style={{borderRadius: '50%'}} />
      {email ? <div className="email">{user.email}</div> : null}
    </StyledLoggedInUser>
  );
};

export default UserIcon;
