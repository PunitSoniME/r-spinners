import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(.5turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  --b: ${(props) => props.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => props.color};
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      ${(props) => props.color} 1deg 70deg,
      #0000 71deg 90deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      ${(props) => props.color} calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
