import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: 0 0 };
`;

const InfinitySpinner2Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "90px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: radial-gradient(circle closest-side, ${props => props.color} 92%,#0000 ) calc(100%/3) 0/calc(100%/4) 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps {
  height?: number | string;
  width?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function InfinitySpinner2({
  height,
  width,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 0.5 : 0.5 / speed;
  
  return (
    <InfinitySpinner2Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
