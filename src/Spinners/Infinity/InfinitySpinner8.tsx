import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: -8px 0%,-8px 50%,-8px 100% };
`;

const InfinitySpinner8Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "12px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "90px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: linear-gradient(90deg , ${props => props.color} 50%, #0000 0) 0 0%,
              linear-gradient(-90deg, ${props => props.color} 50%, #0000 0) 0 50%,
              linear-gradient(90deg , ${props => props.color} 50%, #0000 0) 0 100%;
  background-size: 8px calc(100%/3);
  background-repeat: repeat-x;
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

export default function InfinitySpinner8({
  height,
  width,
  color,
  style = {},
  animationTime = "2s"
}: IProps) {
  return (
    <InfinitySpinner8Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: animationTime,
        ...style
      }} />
  )
}
