import { css, keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: 0 0 };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: radial-gradient(
      circle closest-side,
      ${(props) => props.color} 92%,
      #0000
    )
    calc(100% / 3) 0 / calc(100% / 4) 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
