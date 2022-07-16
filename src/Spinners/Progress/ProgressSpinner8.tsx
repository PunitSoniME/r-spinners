import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-size: 100% 115% }
`;

const ProgressSpinner8Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    bgColor: props["bgColor"] || "#eee",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "60px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "60px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 50%;
  -webkit-mask:linear-gradient(0deg,#000 55%,#0000 0) bottom/100% 18.18%;
  background:
   linear-gradient(${props => props.color} 0 0) bottom/100% 0% no-repeat
   ${props => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  bgColor?: string;
}

export default function ProgressSpinner8({
  height,
  width,
  color,
  bgColor,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <ProgressSpinner8Wrapper
      height={height}
      width={width}
      color={color}
      bgColor={bgColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(7)`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
