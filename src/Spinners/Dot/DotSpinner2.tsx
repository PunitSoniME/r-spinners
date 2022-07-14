import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  { 
    to { background-position: 150% } 
  }
`;

const DotSpinner2Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "60px") as number | string
  }))`
  width: ${props => props.size};
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, ${props => props.color} 90%, #0000) 0/calc(100%/3) 100% no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function DotSpinner2({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <DotSpinner2Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(3)`,
        ...style
      }} />
  )
}
