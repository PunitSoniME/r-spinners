import { css, keyframes } from 'styled-components';

const animation1 = keyframes`
  100% { left: 1px; } 
`;

const animation2 = keyframes`
  100% { top: 0.3px; } 
`;

export const defaultValues = {
  color: '#dc2626',
  height: '20px',
  width: '20px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    ${(props) => props.color};
  position: relative;
  left: 0px;
  top: 0px;
  animation-name: ${animation1}, ${animation2};
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-iteration-count: infinite;
  animation-duration: ${(props) => props.animationDuration}s,
    ${(props) =>
      props.animationDuration === 0 ? 0.5 : props.animationDuration / 2}s;
`;

export default CSS;
