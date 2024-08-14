import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-size: 100% 115% }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '60px',
  width: '60px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background: linear-gradient(${(props) => props.color} 0 0) bottom/100% 0%
    no-repeat ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(7);
`;

export default CSS;
