import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: top right, bottom right };
`;

export const defaultValues = {
  height: '14px',
  width: '90px',
  color: '#0369a1',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => {
    const width = props.width || defaultValues.width;
    return width.includes('px')
      ? `calc(${width} / 0.707);`
      : `calc(${width} / cos(45deg));`;
  }}
  background: repeating-linear-gradient(
        135deg,
        ${(props) => props.color || defaultValues.color} 0 15px,
        #0000 0 20px
      )
      left top,
    repeating-linear-gradient(
        45deg,
        ${(props) => props.color || defaultValues.color} 0 15px,
        #0000 0 20px
      )
      left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
