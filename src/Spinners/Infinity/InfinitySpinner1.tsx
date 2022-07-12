import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: right };
`;

const InfinitySpinner1Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "90px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: repeating-linear-gradient(90deg, ${props => props.color} 0 calc(25% - 5px), #0000 0 25%) left/calc(4*100%/3) 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps {
  height?: number | string;
  width?: number | string;
  color?: string;
  style?: object;
  animationTime?: string;
}

export default function InfinitySpinner1({
  height,
  width,
  color,
  style = {},
  animationTime = "1s"
}: IProps) {
  return (
    <InfinitySpinner1Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: animationTime,
        ...style
      }} />
  )
}
