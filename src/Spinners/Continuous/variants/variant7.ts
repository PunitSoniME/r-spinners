import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: right -25% top 0 }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  -webkit-mask: linear-gradient(90deg, ${(props) => props.color} 70%, #0000 0)
    left/20% 100%;
  background: linear-gradient(${(props) => props.color} 0 0) left -25% top 0 /20%
    100% no-repeat ${(props) => props.bgColor || '#eee'};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-timing-function: steps(6);
`;

export default CSS;
