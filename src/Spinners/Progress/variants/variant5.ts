import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-size: 120% }
`;

export const defaultValues = {
  color: '#dc2626',
  height: '30px',
  width: '74px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  border: 2px solid ${(props) => props.color || defaultValues.color};
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(
      90deg,
      ${(props) => props.color || defaultValues.color} 0 10px,
      #0000 0 15px
    )
    0/0% no-repeat content-box content-box;
  position: relative;
  animation-name: ${animation};
  animation-timing-function: steps(6);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(
          #0000 calc(50% - 7px),
          ${(props) => props.color || defaultValues.color} 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          ${(props) => props.color || defaultValues.color} 0 calc(50% + 7px),
          #0000 0
        )
        left / 100% 100%,
      linear-gradient(
          ${(props) => props.color || defaultValues.color} calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          ${(props) => props.color || defaultValues.color} 0
        )
        left / 2px 100%,
      linear-gradient(
          #0000 calc(50% - 5px),
          ${(props) => props.color || defaultValues.color} 0 calc(50% + 5px),
          #0000 0
        )
        right/2px 100%;
    background-repeat: no-repeat;
  }
`;

export default CSS;
