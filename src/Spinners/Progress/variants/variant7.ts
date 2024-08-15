import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-size: 100% }
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
  -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25%
      100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px)
      no-repeat;
  background: linear-gradient(
      ${(props) => props.color || defaultValues.color} 0 0
    )
    0/0% no-repeat ${(props) => props.bgColor || defaultValues.bgColor};
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
