import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: right };
`;

const InfinitySpinner3Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "14px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `calc(${props["width"]}px / 0.707)` : `calc(${props["width"]} / 0.707)`) : "80px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: repeating-linear-gradient(-45deg, ${props => props.color} 0 15px,#0000 0 20px) left/200% 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function InfinitySpinner3({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;
  
  return (
    <InfinitySpinner3Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
