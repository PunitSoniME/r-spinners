import { css, keyframes } from 'styled-components';

const animation = keyframes`
	{ 
		to { background-position: 150% } 
	}
`;

const defaultValues = {
  size: '60px',
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      ${(props) => props.color} 90%,
      #0000
    )
    0 / calc(100% / 3) 100% no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(3);
`;

export default CSS;
