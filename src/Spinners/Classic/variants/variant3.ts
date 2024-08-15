import { css, keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-position: 80% 100%
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
  background: repeating-linear-gradient(90deg, currentColor 0 8%, #0000 0 10%)
    200% 100%/200% 3px no-repeat;
  padding: 0 5px 8px 0;
  animation-name: ${animation};
  animation-timing-function: steps(6);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
