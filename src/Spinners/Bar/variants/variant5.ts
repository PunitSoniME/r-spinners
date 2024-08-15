import { keyframes, css } from 'styled-components';

const animation = keyframes`
    20% { background-position: 0% 50% , 50% 100%, 100% 100% }
    40% { background-position: 0% 0%  , 50% 50% , 100% 100% }
    60% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
    80% { background-position: 0% 100%, 50% 100%, 100% 0%   }
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
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
