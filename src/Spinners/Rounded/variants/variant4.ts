import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(1turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  --b: ${(props) => props.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, ${(props) => props.color}) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(10);
`;

export default CSS;
