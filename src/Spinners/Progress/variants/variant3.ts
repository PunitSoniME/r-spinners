import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-size: 100% }
`;

export const defaultValues = {
  color1: '#dc2626',
  color2: '#0369a1',
  height: '20px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  background: repeating-linear-gradient(
        135deg,
        ${(props) => props.color1 || defaultValues.color1} 0 10px,
        ${(props) => props.color2 || defaultValues.color2} 0 20px
      )
      0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation-name: ${animation};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
