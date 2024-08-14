import { css, keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: right };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: repeating-linear-gradient(
      90deg,
      ${(props) => props.color} 0 calc(25% - 5px),
      #0000 0 25%
    )
    left/calc(4 * 100%/3) 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
