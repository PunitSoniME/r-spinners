import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-position: right -30px top 0 }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
  bgColor: 'lightgrey',
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  transform: skewX(-45deg);
  background: linear-gradient(${(props) => props.color} 0 0) left -30px top 0/30px
    20px no-repeat ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
