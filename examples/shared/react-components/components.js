import styled from 'styled-components';

export const Button = styled.div.attrs({
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
