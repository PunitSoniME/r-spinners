import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: 0 50% };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: linear-gradient(90deg, ${(props) => props.color} 50%, #0000 0)
      repeat-x,
    conic-gradient(
      from 45deg at right 7px top 50%,
      ${(props) => props.color} 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 50%;
  background-size: calc(100% / 4) 60%, calc(100% / 4) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
