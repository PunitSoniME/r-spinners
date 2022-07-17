import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { transform: rotate(1deg) }
`;

const WobblingSpinner8Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    stickColor: props["stickColor"] || "#eee",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "20px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a) ${props => props.color};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);

  &:before {
    content: "";
    position: absolute;
    inset: -200% 8px 100%;
    background: ${props => props.stickColor}; 
  }
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  stickColor?: string;
}

export default function WobblingSpinner8({
  height,
  width,
  color,
  stickColor,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <WobblingSpinner8Wrapper
      height={height}
      width={width}
      color={color}
      stickColor={stickColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
