import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(1turn) }
`;

export const defaultValues = {
  size: '45px',
  color: '#86198f',
  animationDuration: 1,
  thickness: 8,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  --b: ${(props) =>
    props.thickness || defaultValues.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(
      #0000 10%,
      ${(props) => props.color || defaultValues.color}
    )
    content-box;
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
  animation-timing-function: steps(10);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
