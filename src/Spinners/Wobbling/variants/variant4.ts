import { css, keyframes } from 'styled-components';

const animation1 = keyframes`
  100% { transform:translateX(80px) }
`;

const animation2 = keyframes`
  33% { clip-path: inset(0 0 0 -100px) }
  50% { clip-path: inset(0 0 0 0)      }
  83% { clip-path: inset(0 -100px 0 0) }
`;

export const defaultValues = {
  color: '#dc2626',
  height: '20px',
  width: '20px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  background: ${(props) => props.color || defaultValues.color};
  box-shadow: 0 0 60px 15px ${(props) => props.color || defaultValues.color};
  transform: translate(-80px);
  clip-path: inset(0);
  animation-name: ${animation1}, ${animation2};
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-duration: ${(props) =>
      props.animationDuration === 0
        ? 0.5
        : (props.animationDuration || defaultValues.animationDuration) / 2}s,
    ${(props) => props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
