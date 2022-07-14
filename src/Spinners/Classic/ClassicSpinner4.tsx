import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0);
  }
`;

const ClassicSpinner4Wrapper = styled.div.attrs(
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
  animation-iteration-count: infinite;
  color: ${props => props.color};
`

interface IProps {
  text: string;
  noOfCharactersToBlinkAtLast: number;
  color?: string;
  size?: number | string;
  style?: object;
  speed?: number;
}

export default function ClassicSpinner4({
  text,
  color,
  size = "1rem",
  style = {},
  speed = 1,
  noOfCharactersToBlinkAtLast = 3
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <ClassicSpinner4Wrapper
      text={text}
      color={color}
      style={{
        animationDuration: `${updatedSpeed}s`,
        fontSize: size,
        animationTimingFunction: `steps(${noOfCharactersToBlinkAtLast + 1})`,
        clipPath: `inset(0 ${noOfCharactersToBlinkAtLast}ch 0 0)`,
        ...style
      }} />
  )
}
