import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-size: 120% 120% }
`;

const ProgressSpinner10Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    bgColor: props["bgColor"] || "#eee",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "60px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 200px 200px 0 0;
  -webkit-mask:repeating-radial-gradient(farthest-side at bottom, #0000 0, #000 1px 12%, #0000 calc(12% + 1px) 20%);
  background:
   radial-gradient(farthest-side at bottom, ${props => props.color} 0 95%, #0000 0) bottom/0% 0% no-repeat
   ${props => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  bgColor?: string;
}

export default function ProgressSpinner10({
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
    <ProgressSpinner10Wrapper
      height={height}
      width={width}
      color={color}
      bgColor={bgColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(6)`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
