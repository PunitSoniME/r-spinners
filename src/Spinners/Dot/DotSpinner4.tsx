import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { 
    width:25px;
    aspect-ratio: 1;
  }
`;

const DotSpinner4Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "60px") as number | string
  }))`
  width: ${props => props.size};
  aspect-ratio: 4;
  background: 
    radial-gradient(circle closest-side at left  6px top 50%, ${props => props.color} 90%, #0000),
    radial-gradient(circle closest-side                     , ${props => props.color} 90%, #0000),
    radial-gradient(circle closest-side at right 6px top 50%, ${props => props.color} 90%, #0000);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function DotSpinner4({
  size,
  color,
  style = {},
  speed = 1,
  stop = false,
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <DotSpinner4Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
