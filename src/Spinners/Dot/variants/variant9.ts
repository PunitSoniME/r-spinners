import { css, keyframes } from 'styled-components';

const animation1 = keyframes`
  0% , 49.9% { transform: scale(1) }
  50%, 100%  { transform: scale(-1) }
`;

const animation2 = (color: string) => keyframes`
  100% { box-shadow: 52px 0 ${color} }
`;

const animation3 = keyframes`
  100% { transform: translateX(13px) rotate(-180deg) translateX(13px) }
`;

export const defaultValues = {
  size: '15px',
  color: '#ea580c',
  animationDuration: 2,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  position: relative;
  animation-name: ${animation1};
  animation-play-state: ${(props) => props.animationPlayState};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
  animation-timing-function: steps(3);

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${(props) => props.color || defaultValues.color};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-duration: ${(props) =>
      (props.animationDuration || defaultValues.animationDuration) / 2}s;
    animation-play-state: ${(props) => props.animationPlayState};
  }
  &:before {
    box-shadow: 26px 0 ${(props) => props.color || defaultValues.color};
    transform: translateX(-26px);
    animation-name: ${(props) =>
      animation2(props.color || defaultValues.color)};
  }
  &:after {
    animation-name: ${animation3};
    transform: translateX(13px) rotate(0deg) translateX(13px);
  }
`;

export default CSS;
