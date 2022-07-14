import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%  { background-size: 20% 50% , 20% 50% , 20% 50% }
  20% { background-size: 20% 20% , 20% 50% , 20% 50% }
  40% { background-size: 20% 100%, 20% 20% , 20% 50% }
  60% { background-size: 20% 50% , 20% 100%, 20% 20% }
  80% { background-size: 20% 50% , 20% 50% , 20% 100%}
  100%{ background-size: 20% 50% , 20% 50% , 20% 50% }
`;

const BarSpinner7Wrapper = styled.div.attrs(
  props => ({
    color: props["color"] || "currentColor",
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "45px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(${props => props.color} 0 0);
  background: 
    var(--c) 0%   50%,
    var(--c) 50%  50%,
    var(--c) 100% 50%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function BarSpinner7({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;
  
  return (
    <BarSpinner7Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
