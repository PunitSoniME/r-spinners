import { keyframes, css } from 'styled-components';

const animation = keyframes`
    33%  { background-position: 0   0   , 100% 100% }
    66%  { background-position: 0   100%, 100% 0   }
    100% { background-position: 50% 100%, 50%  0   }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
  animationDuration: 1,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1.2;
  --c: no-repeat
    repeating-linear-gradient(
      90deg,
      ${(props) => props.color || defaultValues.color} 0 20%,
      #0000 0 40%
    );
  background: var(--c) 50% 0, var(--c) 50% 100%;
  background-size: calc(500% / 6) 50%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
