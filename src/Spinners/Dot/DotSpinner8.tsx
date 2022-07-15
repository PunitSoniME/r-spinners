import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

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
    speed: props["speed"],
    animationPlayState: props["animationPlayState"],
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
    animation-play-state: ${props => props.animationPlayState};
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

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function DotSpinner8({
  size,
  color,
  style = {},
  speed = 1,
  stop = false,
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <DotSpinner8Wrapper
      size={size}
      color={color}
      speed={updatedSpeed}
      animationPlayState={stop ? "paused" : "running"}
      style={{
        ...style
      }} />
  )
}
