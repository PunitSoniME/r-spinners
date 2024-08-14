import { css, keyframes } from 'styled-components';

const animation = keyframes`
	to { transform: rotate(1turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  padding: ${(props) => props.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => props.color};
  --_m: conic-gradient(#0000 10%, ${(props) => props.color}),
    linear-gradient(${(props) => props.color} 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
