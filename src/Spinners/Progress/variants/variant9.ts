import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	33%  {background-position:    0% 33% , 100% 33% , 200% 33% }
	66%  {background-position: -100%  66%, 0%   66% , 100% 66% }
	100% {background-position:    0% 100%, 100% 100%, 200% 100%}
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
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      ${(props) => props.color || defaultValues.color} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at bottom,
      ${(props) => props.color || defaultValues.color} 79.5%,
      #0000 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      ${(props) => props.color || defaultValues.color} 80%
    ),
    ${(props) => props.bgColor || defaultValues.bgColor};
  background-size: 50.5% 220%;
  background-position: -100% 0%, 0% 0%, 100% 0%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
