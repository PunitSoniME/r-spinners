import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
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
  background: conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${(props) => props.color || defaultValues.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${(props) => props.color || defaultValues.color} 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 0;
  background-size: calc(100% / 4) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
