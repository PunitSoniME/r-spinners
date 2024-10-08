import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to {
		clip-path: inset(0 -1ch 0 0);
	}
`;

export const defaultValues = {
  color: '#1e293b',
  size: '1.5rem',
  animationDuration: 2,
  noOfCharactersToBlinkAtLast: 3,
};

const CSS = css`
  font-size: ${(props) => props.fontSize || defaultValues.size};
  color: ${(props) => props.color || defaultValues.color};

  &:before {
    content: '${(props) => props.text}';
  }
  animation-name: ${animation};
  clip-path: inset(0 ${(props) => props.noOfCharactersToBlinkAtLast}ch 0 0);
  animation-timing-function: steps(
    ${(props) => props.noOfCharactersToBlinkAtLast + 1}
  );
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
