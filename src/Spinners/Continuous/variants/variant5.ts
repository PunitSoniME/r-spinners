import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: right -40px top 0, center }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
  secondaryColor: 'lightgrey',
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: linear-gradient(${(props) => props.color} 0 0) left -40px top 0/40px
      20px,
    linear-gradient(${(props) => props.secondaryColor} 0 0) center/100% 50%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
