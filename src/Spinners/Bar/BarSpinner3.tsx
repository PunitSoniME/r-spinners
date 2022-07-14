import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: left top, center top, right top }
`;

const BarSpinner3Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "45px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  background: 
    linear-gradient(#0000 calc(1*100%/6), ${props => props.color} 0 calc(3*100%/6),#0000 0) left   bottom,
    linear-gradient(#0000 calc(2*100%/6), ${props => props.color} 0 calc(4*100%/6),#0000 0) center bottom,
    linear-gradient(#0000 calc(3*100%/6), ${props => props.color} 0 calc(5*100%/6),#0000 0) right  bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function BarSpinner3({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;
  
  return (
    <BarSpinner3Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
