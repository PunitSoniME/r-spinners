import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { 
		background-position: left; 
		-webkit-mask-position:left 
	}
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

  background: radial-gradient(
        circle 10px,
        ${(props) => props.color || defaultValues.color} 95%,
        #0000
      )
      right/calc(200% + 20px) 100%,
    linear-gradient(${(props) => props.color || defaultValues.color} 0 0)
      center/100% 6px;
  background-repeat: no-repeat;
  -webkit-mask: radial-gradient(
      circle 4px,
      #0000 93%,
      ${(props) => props.color || defaultValues.color}
    )
    right/calc(200% + 20px) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
