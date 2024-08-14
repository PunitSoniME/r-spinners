import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to {
		background-position: left;
	}
`;

export const defaultValues = {
  color: '#1e293b',
  size: '1.5rem',
  animationColor: '#be123c',
  animationDuration: 2,
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
      ${(props) => props.animationColor || defaultValues.animationColor}
        calc(50% + 0.5ch),
      ${(props) => props.color || defaultValues.color} 0
    )
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(${(props) => props.text.length + 1});
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
