import { css, keyframes } from 'styled-components';

const animation = keyframes`
    0% { background-position: right; }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
  animationDuration: 2,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%)
    ${(props) => props.color || defaultValues.color};
  background-size: 300% 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
