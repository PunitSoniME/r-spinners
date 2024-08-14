import { keyframes, css } from 'styled-components';

const animation = keyframes`
    100% { background-position: left top, center top, right top }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  background: linear-gradient(
        #0000 calc(1 * 100% / 6),
        ${(props) => props.color} 0 calc(3 * 100% / 6),
        #0000 0
      )
      left bottom,
    linear-gradient(
        #0000 calc(2 * 100% / 6),
        ${(props) => props.color} 0 calc(4 * 100% / 6),
        #0000 0
      )
      center bottom,
    linear-gradient(
        #0000 calc(3 * 100% / 6),
        ${(props) => props.color} 0 calc(5 * 100% / 6),
        #0000 0
      )
      right bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
