import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { inset: 0 }
`;

export const defaultValues = {
  color: '#dc2626',
  height: '22px',
  width: '120px',
  animationDuration: 1,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};
  color: ${(props) => props.color || defaultValues.color};
  border-radius: 20px;
  border: 2px solid;
  position: relative;
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: ${animation};
    animation-duration: ${(props) =>
      props.animationDuration || defaultValues.animationDuration}s;
    animation-play-state: ${(props) => props.animationPlayState};
    animation-iteration-count: infinite;
  }
`;

export default CSS;
