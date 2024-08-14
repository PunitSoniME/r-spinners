import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
  100% { background-position: -300% 0 };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: linear-gradient(
      90deg,
      #0000 16px,
      ${(props) => props.color} 0 30px,
      #0000 0
    ),
    radial-gradient(
      circle closest-side at 68% 50%,
      ${(props) => props.color} 92%,
      #0000
    ),
    conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${(props) => props.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${(props) => props.color} 90deg,
      #0000 0
    );
  background-position: 0 0;
  background-size: calc(3 * 100% / 4) 100%;
  background-repeat: repeat-x;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
