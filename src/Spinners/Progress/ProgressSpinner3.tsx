import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-size: 100% }
`;

const ProgressSpinner3Wrapper = styled.div.attrs(
  props => ({
    color1: props["color1"] || "currentColor",
    color2: props["color2"] || "#eee",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "120px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background:
   repeating-linear-gradient(135deg, ${props => props.color1} 0 10px, ${props => props.color2} 0 20px) 0/0%   no-repeat,
   repeating-linear-gradient(135deg, #ddd    0 10px, #eee    0 20px) 0/100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;

  color1?: string;
  color2?: string;
}

export default function ProgressSpinner3({
  height,
  width,
  color1,
  color2,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <ProgressSpinner3Wrapper
      height={height}
      width={width}
      color1={color1}
      color2={color2}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
