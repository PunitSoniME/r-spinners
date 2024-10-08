import { css, keyframes } from 'styled-components';

const animation = keyframes`
	50% {background-position: right }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    left/10px 100% no-repeat
    ${(props) => props.bgColor || defaultValues.bgColor};
  position: relative;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0.2, 1, 1);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(
        ${(props) => props.color || defaultValues.color} 0 0
      )
      left/10px 100% no-repeat
      ${(props) => props.bgColor || defaultValues.bgColor};
    animation: inherit;
  }
  &:before {
    top: 0;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }
  &:after {
    bottom: 0;
    animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
  }
`;

export default CSS;
