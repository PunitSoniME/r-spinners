import { css, keyframes } from 'styled-components';

const animation = keyframes`
	33% { background-size: calc(100%/3) 0%  , calc(100%/3) 100%, calc(100%/3) 100% }
	50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%  , calc(100%/3) 100% }
	66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%  }
`;

const defaultValues = {
  size: '60px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 4;
  --_g: no-repeat
    radial-gradient(circle closest-side, ${(props) => props.color} 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
