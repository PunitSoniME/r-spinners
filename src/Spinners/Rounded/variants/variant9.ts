import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(1turn) }
`;

export const defaultValues = {
  size: '45px',
  dotColor: '#86198f',
  animationDuration: 2,
  color: '#ccc',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${(props) => props.dotColor || defaultValues.dotColor} 95%,
        #0000
      )
      50% 1px/12px 12px no-repeat,
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 14px),
      ${(props) => props.color || defaultValues.color} 0
    );
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
