import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  20% { background-position: 0% 0%  , 50% 50% , 100% 50%  }
  40% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
  60% { background-position: 0% 50% , 50% 100%, 100% 0%   }
  80% { background-position: 0% 50% , 50% 50% , 100% 100% }
`;

const BarSpinner6Wrapper = styled.div.attrs(
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
  background-size: 20% 50%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

interface IProps {
  size?: number | string;
  color?: string;
  style?: object;
  speed?: number;
}

export default function BarSpinner6({
  size,
  color,
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;
  
  return (
    <BarSpinner6Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        ...style
      }} />
  )
}
