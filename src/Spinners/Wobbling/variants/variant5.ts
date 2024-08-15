import { css, keyframes } from 'styled-components';

const animation = keyframes`
	50% { background-position: top right, bottom right }
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
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 50%,
    calc(100% - 10px) 100%,
    10px 100%,
    0 50%
  );
  background: conic-gradient(
        from 135deg at top,
        ${(props) => props.color || defaultValues.color} 90deg,
        #0000 0
      )
      top left,
    conic-gradient(
        from -45deg at bottom,
        ${(props) => props.color || defaultValues.color} 90deg,
        #0000 0
      )
      bottom left,
    ${(props) => props.bgColor || defaultValues.bgColor};
  background-size: 20px 50%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
