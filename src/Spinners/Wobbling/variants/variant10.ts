import { css, keyframes } from 'styled-components';

const animation1 = keyframes`
  0%,49.99% { transform: scaleX(1) }
  50%,100% { transform: scaleX(-1) } 
`;

const animation2 = keyframes`
  100% { transform: rotate(1turn) }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  width: calc(100px - 14px);
  height: 50px;
  border-radius: 50px;
  background: radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        ${(props) => props.bgColor} calc(100% - 14px) 99%,
        #0000
      )
      left,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        ${(props) => props.bgColor} calc(100% - 14px) 99%,
        #0000
      )
      right;
  background-size: calc(50% + 7px) 100%;
  background-repeat: no-repeat;
  position: relative;
  animation-name: ${animation1};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  animation-duration: ${(props) => props.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => props.color};
    transform-origin: -14px 50%;

    animation-name: ${animation2};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${(props) =>
      props.animationDuration === 0 ? 0.5 : props.animationDuration / 2}s;
    animation-play-state: ${(props) => props.animationPlayState};
  }
`;

export default CSS;
