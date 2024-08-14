import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { left: calc(100% + 20px) }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  color: ${(props) => props.color};
  border-radius: 40px;
  border: 2px solid;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);

    animation-name: ${animation};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${(props) => props.animationDuration}s;
    animation-play-state: ${(props) => props.animationPlayState};
  }
`;

export default CSS;
