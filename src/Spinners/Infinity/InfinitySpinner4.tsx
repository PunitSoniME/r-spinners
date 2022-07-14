import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: top right, bottom right };
`;

const InfinitySpinner4Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `calc(${props["width"]}px / 0.707)` : `calc(${props["width"]} / cos(45deg))`) : "80px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: repeating-linear-gradient(135deg, ${props => props.color} 0 15px,#0000 0 20px) left top, 
              repeating-linear-gradient(45deg, ${props => props.color} 0 15px, #0000 0 20px) left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

interface IProps {
  height?: number | string;
  width?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function InfinitySpinner4({
  height,
  width,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;
  
  return (
    <InfinitySpinner4Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
