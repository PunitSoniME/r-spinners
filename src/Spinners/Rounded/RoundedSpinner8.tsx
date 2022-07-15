import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(.5turn) }
`;

const RoundedSpinner8Wrapper = styled.div.attrs(
  props => ({
    color: props["color"],
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "50px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  color: ${props => props.color};
  --_c: no-repeat radial-gradient(farthest-side, ${props => props.color} 92%, #0000);
  background: 
    var(--_c) 50% 0   /12px 12px,
    var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px,
    var(--_c) 0    50%/12px 12px,
    var(--_c) 50%  50%/12px 12px,
    conic-gradient(from 90deg at 4px 4px, #0000 90deg, ${props => props.color} 0)
    -4px -4px/calc(50% + 2px) calc(50% + 2px);
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function RoundedSpinner8({
  size,
  color = "currentColor",
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <RoundedSpinner8Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
