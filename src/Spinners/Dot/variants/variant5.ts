import { css, keyframes } from 'styled-components';

const animation = (color: string) => keyframes`
	0%   { box-shadow: 20px 0 ${color}, -20px 0 #0002; background: ${color} }
	33%  { box-shadow: 20px 0 ${color}, -20px 0 #0002; background: #0002 }
	66%  { box-shadow: 20px 0 #0002,-20px 0 ${color}; background: #0002 }
	100% { box-shadow: 20px 0 #0002,-20px 0 ${color}; background: ${color} }
`;

export const defaultValues = {
  size: '15px',
  color: '#ea580c',
  animationDuration: 2,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${(props) => animation(props.color || defaultValues.color)};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
