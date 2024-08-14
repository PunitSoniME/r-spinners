import { css, keyframes } from 'styled-components';

const animation = keyframes`
    to { transform: rotate(.5turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  border: ${(props) => props.thickness}px solid;
  border-color: ${(props) => props.color} #0000;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
