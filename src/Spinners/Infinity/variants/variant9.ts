import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
  100% { background-position: -300% 0 };
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
  background: linear-gradient(
      90deg,
      #0000 16px,
      ${(props) => props.color || defaultValues.color} 0 30px,
      #0000 0
    ),
    radial-gradient(
      circle closest-side at 68% 50%,
      ${(props) => props.color || defaultValues.color} 92%,
      #0000
    ),
    conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${(props) => props.color || defaultValues.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${(props) => props.color || defaultValues.color} 90deg,
      #0000 0
    );
  background-position: 0 0;
  background-size: calc(3 * 100% / 4) 100%;
  background-repeat: repeat-x;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
