import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation1 = keyframes`
  100% { transform:translateX(80px) }
`;

const animation2 = keyframes`
  33% { clip-path: inset(0 0 0 -100px) }
  50% { clip-path: inset(0 0 0 0)      }
  83% { clip-path: inset(0 -100px 0 0) }
`;


const WobblingSpinner4Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    height: (props["height"] ? (typeof props["height"] === "number" ? `${props["height"]}px` : props["height"]) : "20px") as number | string,
    width: (props["width"] ? (typeof props["width"] === "number" ? `${props["width"]}px` : props["width"]) : "20px") as number | string
  }))`
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.color};
  box-shadow: 0 0 60px 15px ${props => props.color};
  transform: translate(-80px);
  clip-path: inset(0);
  animation-name: ${animation1}, ${animation2};
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, ease-in-out;
`;

interface IProps extends ICommonProps {
  height?: number | string;
  width?: number | string;
}

export default function WobblingSpinner4({
  height,
  width,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 0.5 : speed / 2;

  return (
    <WobblingSpinner4Wrapper
      height={height}
      width={width}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s, ${speed}s`,
        animationPlayState: stop ? "paused, paused" : "running, running",
        ...style
      }} />
  )
}
