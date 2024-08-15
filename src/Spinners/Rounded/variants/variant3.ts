import { css, keyframes } from 'styled-components';

const animation = keyframes`
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
  padding: ${(props) =>
    props.thickness || defaultValues.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => props.color || defaultValues.color};
  --_m: conic-gradient(
      #0000 10%,
      ${(props) => props.color || defaultValues.color}
    ),
    linear-gradient(${(props) => props.color || defaultValues.color} 0 0)
      content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
