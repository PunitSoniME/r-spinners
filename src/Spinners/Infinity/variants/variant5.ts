import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: 0% 0% };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: radial-gradient(
      circle 10px at right 7px top 50%,
      #0000 92%,
      ${(props) => props.color}
    ),
    radial-gradient(
      circle 10px at right 0 top 50%,
      ${(props) => props.color} 92%,
      #0000
    );
  background-size: calc(100% / 3) 100%;
  background-position: 50% 0%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
