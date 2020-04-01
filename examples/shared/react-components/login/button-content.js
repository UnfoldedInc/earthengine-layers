// Forked from react-google-login under MIT License, Copyright (c) 2016 Anthony Grove
// https://github.com/anthonyjgrove/react-google-login

import React from 'react';

const ButtonContent = ({children, icon}) => (
  <span
    style={{
      paddingRight: 10,
      fontWeight: 500,
      paddingLeft: icon ? 0 : 10,
      paddingTop: 10,
      paddingBottom: 10
    }}
  >
    {children}
  </span>
);

export default ButtonContent;
