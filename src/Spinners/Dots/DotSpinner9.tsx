import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation1 = keyframes`
  0% , 49.9% { transform: scale(1) }
  50%, 100%  { transform: scale(-1) }
`;

const animation2 = (color) => keyframes`
  100% { box-shadow: 52px 0 ${color} }
`;

const animation3 = keyframes`
  100% { transform: translateX(13px) rotate(-180deg) translateX(13px) }
`;

const DotSpinner9Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "15px") as number | string,
    speed: props["speed"] / 2
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  position: relative;
  animation-name: ${animation1};
  animation-iteration-count: infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${props => props.color};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-duration: ${props => props.speed}s;
  }
  &:before {
    box-shadow: 26px 0 ${props => props.color};
    transform: translateX(-26px);
    animation-name: ${props => animation2(props.color)};
  }
  &:after {
    animation-name: ${animation3};
    transform: translateX(13px) rotate(0deg) translateX(13px);
  }
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function DotSpinner9({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? (1 * 1.5) : (1 * 1.5) / speed;

  return (
    <DotSpinner9Wrapper
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
