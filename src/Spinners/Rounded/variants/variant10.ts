import { css, keyframes } from 'styled-components';

const animation = keyframes`
	to { transform: rotate(.5turn) }
`;

export const defaultValues = {
  size: '45px',
  color: '#86198f',
  animationDuration: 1,
};

const CSS = css`
  &:before {
    content: '';
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
  }

  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background: conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        ${(props) => props.color || defaultValues.color} 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px),
    radial-gradient(
        farthest-side,
        ${(props) => props.color || defaultValues.color} 6px,
        #0000 7px calc(100% - 6px),
        ${(props) => props.color || defaultValues.color} calc(100% - 5px)
      )
      no-repeat;
  position: relative;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
