import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-size: 120% }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  -webkit-mask: linear-gradient(
      90deg,
      ${(props) => props.color || defaultValues.color} 70%,
      #0000 0
    )
    0/20%;
  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    0/0% no-repeat ${(props) => props.bgColor || defaultValues.bgColor};
  animation-name: ${animation};
  animation-timing-function: steps(6);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
