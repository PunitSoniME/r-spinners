import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-size: 100% 115% }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '60px',
  width: '60px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  border-radius: 50%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    bottom/100% 0% no-repeat
    ${(props) => props.bgColor || defaultValues.bgColor};
  animation-name: ${animation};
  animation-timing-function: steps(7);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
