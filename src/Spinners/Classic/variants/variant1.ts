import { css, keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-size: 100% 3px;
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
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
  padding-bottom: 8px;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
