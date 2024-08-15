import { css, keyframes } from 'styled-components';

const animation = keyframes`
    to { transform: rotate(.5turn) }
`;

export const defaultValues = {
  size: '45px',
  color: '#86198f',
  animationDuration: 1,
  thickness: 8,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  border-radius: 50%;
  border: ${(props) => props.thickness || defaultValues.thickness}px solid;
  border-color: ${(props) => props.color || defaultValues.color} #0000;
  animation-name: ${animation};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
