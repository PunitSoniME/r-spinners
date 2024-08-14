import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: top right, bottom right };
`;

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) =>
    props['width'].includes('px')
      ? `calc(${props['width']} / 0.707)`
      : `calc(${props['width']} / cos(45deg))`};
  background: repeating-linear-gradient(
        135deg,
        ${(props) => props.color} 0 15px,
        #0000 0 20px
      )
      left top,
    repeating-linear-gradient(
        45deg,
        ${(props) => props.color} 0 15px,
        #0000 0 20px
      )
      left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default CSS;
