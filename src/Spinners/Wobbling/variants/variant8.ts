import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { transform: rotate(1deg) }
`;

export const defaultValues = {
  color: '#dc2626',
  stickColor: '#eee',
  height: '20px',
  width: '20px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    ${(props) => props.color};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    inset: -200% 8px 100%;
    background: ${(props) => props.stickColor};
  }
`;

export default CSS;
