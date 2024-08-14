import { css, keyframes } from 'styled-components';

const animation = keyframes`
	50% { 
		left: 100%;
		transform: translateX(calc(-100% - 4px))
	}
`;

export const defaultValues = {
  color: '#dc2626',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 40px;
  color: ${(props) => props.color};
  border: 2px solid;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 25%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: ${animation};
    animation-duration: ${(props) => props.animationDuration}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${(props) => props.animationPlayState};
  }
`;

export default CSS;
