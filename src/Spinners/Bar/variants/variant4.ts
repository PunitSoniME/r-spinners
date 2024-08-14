import { keyframes, css } from 'styled-components';

const animation = keyframes`
    33%  { background-position: 0% 50%, 50% 100%, 100% 100% }
    50%  { background-position: 0%  0%, 50%  50%, 100% 100% }
    66%  { background-position: 0%  0%, 50%   0%, 100%  50% }
    100% { background-position: 0%  0%, 50%   0%, 100%   0% }
`;

export const defaultValues = {
  color: '#991b1b',
  size: '45px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(
      ${(props) => props.color} calc(50% - 10px),
      #0000 0 calc(50% + 10px),
      ${(props) => props.color} 0
    );
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
