import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  33%  {background-position:    0% 33% , 100% 33% , 200% 33% }
  66%  {background-position: -100%  66%, 0%   66% , 100% 66% }
  100% {background-position:    0% 100%, 100% 100%, 200% 100%}
`;

const ProgressSpinner9Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    bgColor: props["bgColor"] || "#eee",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  --r1: 154%;
  --r2: 68.5%;
  width:60px;
  height:60px;
  border-radius: 50%; 
  background:
    radial-gradient(var(--r1) var(--r2) at top   , #0000 79.5%, ${props => props.color} 80%),
    radial-gradient(var(--r1) var(--r2) at bottom, ${props => props.color} 79.5%, #0000 80%),
    radial-gradient(var(--r1) var(--r2) at top   , #0000 79.5%, ${props => props.color} 80%),
    ${props => props.bgColor};
  background-size: 50.5% 220%;
  background-position: -100% 0%,0% 0%,100% 0%;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  bgColor?: string;
}

export default function ProgressSpinner9({
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
    <ProgressSpinner9Wrapper
      height={height}
      width={width}
      color={color}
      bgColor={bgColor}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
