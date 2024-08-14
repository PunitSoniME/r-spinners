import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: 0 0 };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${(props) => props.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${(props) => props.color} 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 0;
  background-size: calc(100% / 4) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
