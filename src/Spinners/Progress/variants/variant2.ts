import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-size: 110% }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 20px;
  background: linear-gradient(${(props) => props.color} 0 0) 0/0% no-repeat
    ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(10);
`;

export default CSS;
