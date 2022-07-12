import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% { background-position: 0 0 };
`;

const InfinitySpinner6Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "90px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: conic-gradient(from 45deg at calc(100% - 7px) 50%, ${props => props.color} 90deg, #0000 0),
              conic-gradient(from -135deg at 7px 50%, ${props => props.color} 90deg, #0000 0);
  background-position: calc(100%/3) 0;
  background-size:calc(100%/4) 100%;
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

export default function InfinitySpinner6({
  height,
  width,
  color,
  style = {},
  animationTime = "2s"
}: IProps) {
  return (
    <InfinitySpinner6Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: animationTime,
        ...style
      }} />
  )
}
