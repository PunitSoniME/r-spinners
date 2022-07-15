import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  33%  { background-position: 0% 50%, 50% 100%, 100% 100% }
  50%  { background-position: 0%  0%, 50%  50%, 100% 100% }
  66%  { background-position: 0%  0%, 50%   0%, 100%  50% }
  100% { background-position: 0%  0%, 50%   0%, 100%   0% }
`;

const BarSpinner4Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "45px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(${props => props.color} calc(50% - 10px),#0000 0 calc(50% + 10px), ${props => props.color} 0);
  background: 
    var(--c) 0%   100%,
    var(--c) 50%  100%,
    var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function BarSpinner4({
  size,
  color,
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;
  
  return (
    <BarSpinner4Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
