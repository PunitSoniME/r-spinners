import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation1 = keyframes`
  100% { left: 1px; } 
`;

const animation2 = keyframes`
  100% { top: 0.3px; } 
`;

const WobblingSpinner7Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "20px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a) ${props => props.color};
  position: relative;
  left: 0px;
  top: 0px;
  animation-name: ${animation1}, ${animation2};
  animation-timing-function: cubic-bezier(.5,-200,.5,200);
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function WobblingSpinner7({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 0.5 : speed / 2;

  return (
    <WobblingSpinner7Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: `${speed}s, ${updatedSpeed}s`,
        animationPlayState: stop ? "paused, paused" : "running, running",
        ...style
      }} />
  )
}
