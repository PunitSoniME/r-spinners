import { css, keyframes } from 'styled-components';

const animation = keyframes`
	25% { background-position: calc(1*100%/3) 0 }
	50% { background-position: calc(2*100%/3) 0 }
	75% { background-position: calc(3*100%/3) 0 }
	100% { background-position: calc(4*100%/3) 0 }
`;

export const defaultValues = {
  color: '#1e293b',
  size: '1.5rem',
  animationDuration: 3,
  colors: ['#000', '#b91c1c', '#0369a1', '#15803d'],
};

const CSS = css`
  font-size: ${(props) => props.fontSize || defaultValues.size};
  color: ${(props) => props.color || defaultValues.color};

  &:before {
    content: '${(props) => props.text}';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      ${(props) => props.colors[0] || defaultValues.colors[0]} 25%,
      ${(props) => props.colors[1] || defaultValues.colors[1]} 0 50%,
      ${(props) => props.colors[2] || defaultValues.colors[2]} 0 75%,
      ${(props) => props.colors[3] || defaultValues.colors[3]} 0
    )
    0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${animation};
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
