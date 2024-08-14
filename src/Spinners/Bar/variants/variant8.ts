import { keyframes, css } from 'styled-components';

const animation = keyframes`
    16.67% { background-position: 0% 0%  , 50% 100%, 100% 100% }
    33.33% { background-position: 0% 0%  , 50% 0%  , 100% 100% }
    50%    { background-position: 0% 0%  , 50% 0%  , 100% 0%   }
    66.67% { background-position: 0% 100%, 50% 0%  , 100% 0%   }
    83.33% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(${(props) => props.color} 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
