import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-position: right };
`;

export const defaultValues = {
  height: '14px',
  width: '90px',
  color: '#0369a1',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => `calc(${props['width'] || defaultValues.width} / 0.707)`};
  background: repeating-linear-gradient(
      -45deg,
      ${(props) => props.color || defaultValues.color} 0 15px,
      #0000 0 20px
    )
    left/200% 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
