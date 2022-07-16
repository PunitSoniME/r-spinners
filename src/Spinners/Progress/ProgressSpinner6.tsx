import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { inset: 0 }
`;

const ProgressSpinner6Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    speed: props["speed"],
    animationPlayState: props["animationPlayState"],
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "22px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string,
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  color: ${props => props.color};
  border-radius: 20px;
  border: 2px solid;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: ${animation};
    animation-duration: ${props => props.speed}s;
    animation-play-state: ${props => props.animationPlayState};
    animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function ProgressSpinner6({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <ProgressSpinner6Wrapper
      height={height}
      width={width}
      color={color}
      speed={updatedSpeed}
      animationPlayState={stop ? "paused" : "running"}
      style={{
        ...style
      }} />
  )
}
