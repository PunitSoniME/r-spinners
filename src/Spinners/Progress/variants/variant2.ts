import { css, keyframes } from 'styled-components';

const animation = keyframes`
  	100% { background-size: 110% }
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
  border-radius: 20px;
  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    0/0% no-repeat ${(props) => props.bgColor || defaultValues.bgColor};
  animation-name: ${animation};
  animation-timing-function: steps(10);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
