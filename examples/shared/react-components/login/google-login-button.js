// Forked from react-google-login under MIT License, Copyright (c) 2016 Anthony Grove
// https://github.com/anthonyjgrove/react-google-login

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './button-content';
import Icon from './icon.js';

const propTypes = {
  account: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  onError: PropTypes.func,
  buttonText: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  disabledStyle: PropTypes.object,
  tag: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  render: PropTypes.func,
  theme: PropTypes.string,
  icon: PropTypes.bool

  // autoLoad: PropTypes.bool,
  // isSignedIn: PropTypes.bool,
  // responseType: PropTypes.string,
};

const defaultProps = {
  account: null,
  onLogin: user => {},
  // eslint-disable-next-line
  onError: error => console.error(error),

  buttonText: 'Sign in with Google',
  type: 'button',
  tag: 'button',
  disabledStyle: {
    opacity: 0.6
  },
  icon: true,
  theme: 'light'

  // isSignedIn: false,
};

const GoogleLoginButton = props => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const {
    account,
    onLogin,
    onError,
    tag,
    type,
    className,
    disabledStyle,
    buttonText,
    children,
    render,
    theme,
    icon,
    disabled: disabledProp
  } = props;

  async function signIn() {
    try {
      const user = await account.login({prompt: 'login'});
      onLogin(user);
    } catch (error) {
      onError(error);
    }
  }

  const loaded = true;

  const disabled = disabledProp || !loaded;

  if (render) {
    return render({onClick: signIn, disabled});
  }

  const initialStyle = {
    backgroundColor: theme === 'dark' ? 'rgb(66, 133, 244)' : '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, .54)',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)',
    padding: 0,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif'
  };

  const hoveredStyle = {
    cursor: 'pointer',
    opacity: 0.9
  };

  const activeStyle = {
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#3367D6' : '#eee',
    color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, .54)',
    opacity: 1
  };

  const defaultStyle = (() => {
    if (disabled) {
      return Object.assign({}, initialStyle, disabledStyle);
    }

    if (active) {
      if (theme === 'dark') {
        return Object.assign({}, initialStyle, activeStyle);
      }

      return Object.assign({}, initialStyle, activeStyle);
    }

    if (hovered) {
      return Object.assign({}, initialStyle, hoveredStyle);
    }

    return initialStyle;
  })();

  const googleLoginButton = React.createElement(
    tag,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setActive(false);
      },
      onMouseDown: () => setActive(true),
      onMouseUp: () => setActive(false),
      onClick: signIn,
      style: defaultStyle,
      type,
      disabled,
      className
    },
    [
      icon && <Icon key={1} active={active} />,
      <ButtonContent icon={icon} key={2}>
        {children || buttonText}
      </ButtonContent>
    ]
  );

  return googleLoginButton;
};

GoogleLoginButton.propTypes = propTypes;
GoogleLoginButton.defaultProps = defaultProps;

export default GoogleLoginButton;
