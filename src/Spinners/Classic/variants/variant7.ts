import { css, keyframes } from 'styled-components';

const animation = (length: number) => keyframes`
	to {
		text-shadow: -${length + 1}ch 0 var(--c), 0ch 0 var(--c);
	}
`;

export const defaultValues = {
  color: '#1e293b',
  size: '1.5rem',
  animationDuration: 2,
};

const CSS = css`
  font-size: ${(props) => props.fontSize || defaultValues.size};
  color: ${(props) => props.color || defaultValues.color};

  &:before {
    content: '${(props) => props.text}';
  }
  --c: ${(props) => props.color || defaultValues.color};
  color: #0000;
  overflow: hidden;
  animation-name: ${(props) => animation(props.text.length)};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  text-shadow: 0 0 var(--c), ${(props) => props.text.length + 1}ch 0 var(--c);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
