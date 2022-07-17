import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { transform: rotate(1deg) } 
`;

const WobblingSpinner9Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "80px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  color:#514b82;
  background:
    radial-gradient(farthest-side, ${props => props.color} 98%, #0000) left  /20px 20px,
    radial-gradient(farthest-side, ${props => props.color} 98%, #0000) right /20px 20px,
    radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
    linear-gradient(${props => props.color} 0 0) center/100% 2px;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -150, 0.5, 150);
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function WobblingSpinner9({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <WobblingSpinner9Wrapper
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
