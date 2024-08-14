import { keyframes, css } from 'styled-components';

const animation = keyframes`
    0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
    20% { background-size: 20% 60% , 20% 100%, 20% 100% }
    40% { background-size: 20% 80% , 20% 60% , 20% 100% }
    60% { background-size: 20% 100%, 20% 80% , 20% 60%  }
    80% { background-size: 20% 100%, 20% 100%, 20% 80%  }
    100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(${(props) => props.color} 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
