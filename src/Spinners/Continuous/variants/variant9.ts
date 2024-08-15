import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
  100% { background-position: calc(200% - 5px) }
`;

export const defaultValues = {
  color: '#ccc',
  dotColor: '#514b82',

  height: '20px',
  width: '120px',
  animationDuration: 2,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: radial-gradient(
      circle closest-side,
      ${(props) => props.dotColor || defaultValues.dotColor} 94%,
      #0000
    )
    50% 50% / calc(50% + 10px) 70% repeat-x
    ${(props) => props.color || defaultValues.color};
  animation-name: ${animation};
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
