import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation1 = keyframes`
  100% { transform: translateX(25px) }
`;

const animation2 = keyframes`
  100% { transform: rotate(-180deg) translateX(25px) }
`;

const DotSpinner8Wrapper = styled.div.attrs(
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
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${props => props.speed}s;
  }
  &:before {
    box-shadow: -25px 0 ${props => props.color};
    animation-name: ${animation1};
  }
  &:after {
    transform: rotate(0deg) translateX(25px);
    animation-name: ${animation2};
  }
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function DotSpinner8({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <DotSpinner8Wrapper
      size={size}
      color={color}
      speed={updatedSpeed}
      style={{
        ...style
      }} />
  )
}
