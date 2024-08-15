import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(.5turn) }
`;

export const defaultValues = {
  size: '45px',
  color: '#86198f',
  animationDuration: 1,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  --_c: radial-gradient(
    farthest-side,
    ${(props) => props.color || defaultValues.color} 92%,
    #0000
  );
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
