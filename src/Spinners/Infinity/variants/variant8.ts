import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: -8px 0%,-8px 50%,-8px 100% };
`;

export const defaultValues = {
  height: '14px',
  width: '90px',
  color: '#0369a1',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  background: linear-gradient(
        90deg,
        ${(props) => props.color || defaultValues.color} 50%,
        #0000 0
      )
      0 0%,
    linear-gradient(
        -90deg,
        ${(props) => props.color || defaultValues.color} 50%,
        #0000 0
      )
      0 50%,
    linear-gradient(
        90deg,
        ${(props) => props.color || defaultValues.color} 50%,
        #0000 0
      )
      0 100%;
  background-size: 8px calc(100% / 3);
  background-repeat: repeat-x;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
