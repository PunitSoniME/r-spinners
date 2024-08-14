import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(1turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${(props) => props.dotColor} 95%,
        #0000
      )
      50% 1px/12px 12px no-repeat,
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 14px),
      ${(props) => props.color} 0
    );
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
