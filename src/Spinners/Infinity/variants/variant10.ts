import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-position: -20px 0%, 20px 0% };
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
  background: linear-gradient(90deg, ${(props) => props.color} 50%, #0000 0) 0
      0%,
    linear-gradient(
        -90deg,
        ${(props) => props.color || defaultValues.color} 50%,
        #0000 0
      )
      0 0%;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
