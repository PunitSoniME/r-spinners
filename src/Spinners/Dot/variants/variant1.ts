import { css, keyframes } from 'styled-components';

const animation = keyframes`
    { 
      to { clip-path: inset(0 -34% 0 0) } 
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
    0 / calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation-name: ${animation};
  animation-timing-function: steps(4);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
