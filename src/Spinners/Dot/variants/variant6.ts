import { css, keyframes } from 'styled-components';

const animation = (color: string) => keyframes`
	0%  { box-shadow: 15px 0 ${color}, -25px 0 ${color} }
	50% { box-shadow: 15px 0 ${color}, -15px 0 ${color} }
	100% { box-shadow: 25px 0 ${color}, -15px 0 ${color} }
`;

const defaultValues = {
  size: '60px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  background: ${(props) => props.color};
  border-radius: 50%;
  animation-name: ${(props) => animation(props.color)};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
`;

export default CSS;
