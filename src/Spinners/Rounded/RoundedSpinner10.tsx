import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(.5turn) }
`;

const RoundedSpinner10Wrapper = styled.div.attrs(
  props => ({
    color: props["color"],
    size: (props["size"] ? (typeof props["size"] === "number" ? `${props["size"]}px` : props["size"]) : "50px") as number | string,
  }))`
  width: ${props => props.size};
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background: 
    conic-gradient(from 90deg at 4px 4px, #0000 90deg, ${props => props.color} 0)
    -4px -4px/calc(50% + 2px) calc(50% + 2px),
    radial-gradient(farthest-side, ${props => props.color} 6px, #0000 7px calc(100% - 6px), ${props => props.color} calc(100% - 5px)) no-repeat;
  position: relative;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:before {
    content: "";
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
  }
`;

interface IProps extends ICommonProps {
  size?: number | string;
}

export default function RoundedSpinner10({
  size,
  color = "currentColor",
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <RoundedSpinner10Wrapper
      size={size}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
