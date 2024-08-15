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
  width: ${(props) => props.width || defaultValues.width};
  background: repeating-linear-gradient(
      90deg,
      ${(props) => props.color || defaultValues.color} 0 calc(25% - 5px),
      #0000 0 25%
    )
    left/calc(4 * 100%/3) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
