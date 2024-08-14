import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-position: -20px 0%, 20px 0% };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: linear-gradient(90deg, ${(props) => props.color} 50%, #0000 0) 0
      0%,
    linear-gradient(-90deg, ${(props) => props.color} 50%, #0000 0) 0 0%;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
