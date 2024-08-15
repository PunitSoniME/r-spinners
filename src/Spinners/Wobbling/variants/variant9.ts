import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { transform: rotate(1deg) } 
`;

export const defaultValues = {
  color: '#dc2626',
  height: '20px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  color: #514b82;
  background: radial-gradient(
        farthest-side,
        ${(props) => props.color || defaultValues.color} 98%,
        #0000
      )
      left / 20px 20px,
    radial-gradient(
        farthest-side,
        ${(props) => props.color || defaultValues.color} 98%,
        #0000
      )
      right / 20px 20px,
    radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
    linear-gradient(${(props) => props.color} 0 0) center/100% 2px;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -150, 0.5, 150);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
