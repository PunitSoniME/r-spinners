import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-size: 120% }
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
  -webkit-mask: linear-gradient(90deg, ${(props) => props.color} 70%, #0000 0) 0/20%;
  background: linear-gradient(${(props) => props.color} 0 0) 0/0% no-repeat
    ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(6);
`;

export default CSS;
