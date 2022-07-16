import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: calc(200% - 5px) }
`;

const ContinuousSpinner9Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    dotColor: props["dotColor"] || props["color"],
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: 
      radial-gradient(circle closest-side, ${props => props.dotColor} 94%, #0000) 50% 50%/calc(50% + 10px) 70% repeat-x 
      ${props => props.color};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  dotColor?: string;
}

export default function ContinuousSpinner9({
  height,
  width,
  color,
  dotColor,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <ContinuousSpinner9Wrapper
      height={height}
      width={width}
      color={color}
      dotColor={dotColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
