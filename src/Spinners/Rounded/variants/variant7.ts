import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(.5turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  aspect-ratio: 1;
  --_c: radial-gradient(farthest-side, ${(props) => props.color} 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
