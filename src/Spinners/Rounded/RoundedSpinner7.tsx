import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(.5turn) }
`;

const RoundedSpinner7Wrapper = styled.div.attrs(
  props => ({
    color: props["color"],
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "50px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  --_c: radial-gradient(farthest-side, ${props => props.color} 92%, #0000);
  background: 
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function RoundedSpinner7({
  size,
  color = "currentColor",
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <RoundedSpinner7Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
