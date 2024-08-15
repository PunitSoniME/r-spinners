import { css, keyframes } from 'styled-components';

const animation = keyframes`
	{ 
		to { background-position: 150% } 
	}
`;

export const defaultValues = {
  size: '60px',
  color: '#ea580c',
  animationDuration: 2,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      ${(props) => props.color || defaultValues.color} 90%,
      #0000
    )
    0 / calc(100% / 3) 100% no-repeat;
  animation-name: ${animation};
  animation-timing-function: steps(3);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
