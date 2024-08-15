import { css, keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 0;
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
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
