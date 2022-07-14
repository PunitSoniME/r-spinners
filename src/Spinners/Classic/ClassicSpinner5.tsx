import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0);
  }
`;

const ClassicSpinner5Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    color: props["color"] || "#000",
  }))`
  &:before {
    content: "${props => props.text}";
  }
  font-weight: bold;
  font-family: monospace;
  animation-name: ${animation};
  clip-path: inset(0 100% 0 0);
  animation-iteration-count: infinite;
  color: ${props => props.color};
`

interface IProps {
  text: string;
  color?: string;
  size?: number | string;
  style?: object;
  speed?: number;
}

export default function ClassicSpinner5({
  text,
  color,
  size = "1rem",
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <ClassicSpinner5Wrapper
      text={text}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        fontSize: size,
        animationTimingFunction: `steps(${text.length + 1})`,
        ...style
      }} />
  )
}
