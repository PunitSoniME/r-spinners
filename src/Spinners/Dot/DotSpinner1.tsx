import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  { 
    to { clip-path: inset(0 -34% 0 0) } 
  }
`;

const DotSpinner1Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "60px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, ${props => props.color} 90%, #0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function DotSpinner1({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;
  
  return (
    <DotSpinner1Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(4)`,
        ...style
      }} />
  )
}
