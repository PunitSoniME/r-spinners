import { css, keyframes } from 'styled-components';

const animation = keyframes`
	to { 
		width:25px;
		aspect-ratio: 1;
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
      circle closest-side at left 6px top 50%,
      ${(props) => props.color || defaultValues.color} 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side,
      ${(props) => props.color || defaultValues.color} 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side at right 6px top 50%,
      ${(props) => props.color} 90%,
      #0000
    );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-direction: alternate;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
