import { keyframes, css } from 'styled-components';

const animation = keyframes`
    33% { background-position: 0% 0%  , 50% 100%,100% 0%   }
    66% { background-position: 0% 100%, 50% 0%  ,100% 100% }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(${(props) => props.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 60%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
