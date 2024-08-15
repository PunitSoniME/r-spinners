import { css, keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: 0 0 };
`;

export const defaultValues = {
  height: '14px',
  width: '90px',
  color: '#0369a1',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  background: radial-gradient(
      circle closest-side,
      ${(props) => props.color || defaultValues.color} 92%,
      #0000
    )
    calc(100% / 3) 0 / calc(100% / 4) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
