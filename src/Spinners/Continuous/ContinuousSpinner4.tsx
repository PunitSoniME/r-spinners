import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { left: calc(100% + 20px) }
`;

const ContinuousSpinner4Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    speed: props["speed"],
    animationPlayState: props["animationPlayState"],
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 40px;
  color: ${props => props.color};
  border: 2px solid;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);

    animation-name: ${animation};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${props => props.speed}s;
    animation-play-state: ${props => props.animationPlayState};
  }
  
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function ContinuousSpinner4({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <ContinuousSpinner4Wrapper
      height={height}
      width={width}
      color={color}
      speed={updatedSpeed}
      animationPlayState={stop ? "paused" : "running"}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
