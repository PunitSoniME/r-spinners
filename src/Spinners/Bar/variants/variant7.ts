import { keyframes, css } from 'styled-components';

const animation = keyframes`
    0%  { background-size: 20% 50% , 20% 50% , 20% 50% }
    20% { background-size: 20% 20% , 20% 50% , 20% 50% }
    40% { background-size: 20% 100%, 20% 20% , 20% 50% }
    60% { background-size: 20% 50% , 20% 100%, 20% 20% }
    80% { background-size: 20% 50% , 20% 50% , 20% 100%}
    100%{ background-size: 20% 50% , 20% 50% , 20% 50% }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
  animationDuration: 1,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${(props) => props.color || defaultValues.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
