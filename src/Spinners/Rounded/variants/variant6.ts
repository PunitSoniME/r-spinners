import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(1turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: radial-gradient(
        farthest-side,
        ${(props) => props.dotColor} 95%,
        #0000
      )
      50% 0/12px 12px no-repeat,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 5px),
        ${(props) => props.color} calc(100% - 4px)
      )
      content-box;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
