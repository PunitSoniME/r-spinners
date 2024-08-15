import { css, keyframes } from 'styled-components';

const animation1 = (gap: string) => keyframes`
  50% { transform: translateX(${gap}) }
`;

const animation2 = (gap: string) => keyframes`
  100% { transform: rotate(-360deg) translateX(${gap}) }
`;

export const defaultValues = {
  size: '15px',
  gap: '26px',
  color: '#ea580c',
  animationDuration: 2,
};

const CSS = css`
  width: ${(props) => props.size || defaultValues.size};
  aspect-ratio: 1;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${(props) => props.color || defaultValues.color};

    animation-duration: ${(props) =>
      props.animationDuration || defaultValues.animationDuration}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${(props) => props.animationPlayState};
  }
  &:before {
    box-shadow: -${(props) => props.gap || defaultValues.gap} 0 ${(props) => props.color};
    animation-name: ${(props) => animation1(props.gap || defaultValues.gap)};
  }
  &:after {
    transform: rotate(0deg)
      translateX(${(props) => props.gap || defaultValues.gap});
    animation-name: ${(props) => animation2(props.gap || defaultValues.gap)};
  }
`;

export default CSS;
