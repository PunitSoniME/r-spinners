import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-position: right };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => `calc(${props['width']} / 0.707)`};
  background: repeating-linear-gradient(
      -45deg,
      ${(props) => props.color} 0 15px,
      #0000 0 20px
    )
    left/200% 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
