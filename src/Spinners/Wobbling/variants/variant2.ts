import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	50% { background-position: right }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 20px;
  background: radial-gradient(
      farthest-side,
      ${(props) => props.color} 94%,
      #0000
    )
    left/20px 20px no-repeat ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
