import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation1 = keyframes`
  50% { transform: translateX(26px) }
`;

const animation2 = keyframes`
  100% { transform: rotate(-360deg) translateX(26px) }
`;

const DotSpinner10Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "15px") as number | string,
    speed: props["speed"]
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${props => props.color};
    
    animation-duration: ${props => props.speed}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &:before {
    box-shadow: -26px 0 ${props => props.color};
    animation-name: ${animation1};
  }
  &:after {
    transform: rotate(0deg) translateX(26px);
    animation-name: ${animation2};
  }
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function DotSpinner10({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? (1 * 1.5) : (1 * 1.5) / speed;

  return (
    <DotSpinner10Wrapper
      size={size}
      color={color}
      speed={updatedSpeed}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(3)`,
        ...style
      }} />
  )
}
