import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = (color) => keyframes`
  0%   { box-shadow: 20px 0 ${color}, -20px 0 #0002; background: ${color} }
  33%  { box-shadow: 20px 0 ${color}, -20px 0 #0002; background: #0002 }
  66%  { box-shadow: 20px 0 #0002,-20px 0 ${color}; background: #0002 }
  100% { box-shadow: 20px 0 #0002,-20px 0 ${color}; background: ${color} }
`;

const DotSpinner5Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "15px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${props => animation(props.color)};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function DotSpinner5({
  size,
  color,
  style = {},
  speed = 1,
  stop = false,
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <DotSpinner5Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
