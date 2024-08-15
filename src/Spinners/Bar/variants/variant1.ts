import { keyframes, css } from 'styled-components';

const animation = keyframes`
  0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
  33% { background-size: 20% 10% , 20% 100%, 20% 100% }
  50% { background-size: 20% 100%, 20% 10% , 20% 100% }
  66% { background-size: 20% 100%, 20% 100%, 20% 10%  }
  100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
  animationDuration: 1,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(${(props) => props.color || defaultValues.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
