import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(1turn) }
`;

const RoundedSpinner6Wrapper = styled.div.attrs(
  props => ({
    color: props["color"],
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "50px") as number | string,
    dotColor: props["dotColor"] || props["color"]
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: 
    radial-gradient(farthest-side, ${props => props.dotColor} 95%, #0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 5px), ${props => props.color} calc(100% - 4px)) content-box;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  size?: number | string;
  dotColor?: string;
}

export default function RoundedSpinner6({
  size,
  color = "currentColor",
  dotColor,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <RoundedSpinner6Wrapper
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
