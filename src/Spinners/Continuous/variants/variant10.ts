import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-position: right -40px top 0 }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
  bgColor: 'lightgrey',
  animationDuration: 2,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    left -40px top 0/40px 100% no-repeat ${(props) => props.bgColor || defaultValues.bgColor};
  -webkit-mask: linear-gradient(#000 0 0) top / 100% 5px no-repeat,
    linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
    repeating-linear-gradient(90deg, #000 0 5px, #0000 0 20%)
      left/calc(100% - 5px) 100%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
