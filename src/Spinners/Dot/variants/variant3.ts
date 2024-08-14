import { css, keyframes } from 'styled-components';

const animation = keyframes`
	20% { background-position: 0%   0%, 50%  50%, 100%  50% }
	40% { background-position: 0% 100%, 50%   0%, 100%  50% }
	60% { background-position: 0%  50%, 50% 100%, 100%   0% }
	80% { background-position: 0%  50%, 50%  50%, 100% 100% }
`;

const defaultValues = {
  size: '60px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 2;
  --_g: no-repeat
    radial-gradient(circle closest-side, ${(props) => props.color} 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
