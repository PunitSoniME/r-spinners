import { css, keyframes } from 'styled-components';

const animation1 = keyframes`
  100% { transform: translateX(25px) }
`;

const animation2 = keyframes`
  100% { transform: rotate(-180deg) translateX(25px) }
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
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${(props) => props.color || defaultValues.color};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${(props) =>
      props.animationDuration || defaultValues.animationDuration}s;
    animation-play-state: ${(props) => props.animationPlayState};
  }
  &:before {
    box-shadow: -25px 0 ${(props) => props.color || defaultValues.color};
    animation-name: ${animation1};
  }
  &:after {
    transform: rotate(0deg) translateX(25px);
    animation-name: ${animation2};
  }
`;

export default CSS;
