import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-size: 100% }
`;

export const defaultValues = {
  color1: '#dc2626',
  color2: '#0369a1',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: repeating-linear-gradient(
        135deg,
        ${(props) => props.color1} 0 10px,
        ${(props) => props.color2} 0 20px
      )
      0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export default CSS;
