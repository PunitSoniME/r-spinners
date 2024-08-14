import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-position: right -50px top 0 }
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

  background: linear-gradient(90deg, #0000, ${(props) => props.color}) left -50px
    top 0/50px 20px no-repeat ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
