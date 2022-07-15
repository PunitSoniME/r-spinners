import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(1turn) }
`;

const RoundedSpinner9Wrapper = styled.div.attrs(
  props => ({
    color: props["color"],
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "50px") as number | string,
    dotColor: props["dotColor"]
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side, ${props => props.dotColor} 95%, #0000) 50% 1px/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 14px), ${props => props.color} 0);
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  size?: number | string;
  dotColor?: string;
}

export default function RoundedSpinner9({
  size,
  color = "#ccc",
  dotColor = "currentColor",
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <RoundedSpinner9Wrapper
      size={size}
      color={color}
      dotColor={dotColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
