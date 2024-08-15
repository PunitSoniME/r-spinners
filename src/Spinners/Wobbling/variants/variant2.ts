import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	50% { background-position: right }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  border-radius: 20px;
  background: radial-gradient(
      farthest-side,
      ${(props) => props.color || defaultValues.color} 94%,
      #0000
    )
    left/20px 20px no-repeat
    ${(props) => props.bgColor || defaultValues.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
