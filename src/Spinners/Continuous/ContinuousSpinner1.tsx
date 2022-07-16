import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  0% { background-position: right; }
`;

const ContinuousSpinner1Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: 
    linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%)
    ${props => props.color};
  background-size: 300% 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function ContinuousSpinner1({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <ContinuousSpinner1Wrapper
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
