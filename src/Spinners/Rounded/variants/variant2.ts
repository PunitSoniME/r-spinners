import { css, keyframes } from 'styled-components';

const animation = keyframes`
    to { transform: rotate(1turn) }
`;

export const defaultValues = {
  size: '45px',
  color: '#86198f',
  animationDuration: 1,
  thickness: 8,
  secondaryColor: '#cbd5e1',
};

const CSS = css`
  border: ${(props) => props.thickness || defaultValues.thickness}px solid
    ${(props) => props.secondaryColor || defaultValues.secondaryColor};
  border-right-color: ${(props) => props.color || defaultValues.color};
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
