import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: 0% 0% };
`;

const InfinitySpinner5Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "80px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: radial-gradient(circle 10px at right 7px top 50%, #0000 92%, ${props => props.color}),
              radial-gradient(circle 10px at right 0   top 50%, ${props => props.color} 92%, #0000);
  background-size: calc(100%/3) 100%; 
  background-position: 50% 0%;
  animation-name: ${animation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

interface IProps {
  height?: number | string;
  width?: number | string;
  color?: string;
  style?: object;
  animationTime?: string;
}

export default function InfinitySpinner5({
  height,
  width,
  color,
  style = {},
  animationTime = "2s"
}: IProps) {
  return (
    <InfinitySpinner5Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: animationTime,
        ...style
      }} />
  )
}
