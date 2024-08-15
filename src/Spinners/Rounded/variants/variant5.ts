import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(.5turn) }
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
  background: ${(props) => props.color || defaultValues.color};
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      ${(props) => props.color || defaultValues.color} 1deg 70deg,
      #0000 71deg 90deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      ${(props) => props.color || defaultValues.color} calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: ${animation};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
