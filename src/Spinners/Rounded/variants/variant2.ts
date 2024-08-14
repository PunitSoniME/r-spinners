import { css, keyframes } from 'styled-components';

const animation = keyframes`
    to { transform: rotate(1turn) }
`;

const CSS = css`
  border: ${(props) => props.thickness}px solid
    ${(props) => props.secondaryColor};
  border-right-color: ${(props) => props.color};
  width: ${(props) => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
