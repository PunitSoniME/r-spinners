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
  animationTime?: string;
}

export default function ClassicSpinner4({
  text,
  color,
  size = "1rem",
  style = {},
  animationTime = "1s",
  noOfCharactersToBlinkAtLast = 3
}: IProps) {
  return (
    <ClassicSpinner4Wrapper
      text={text}
      color={color}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        animationTimingFunction: `steps(${noOfCharactersToBlinkAtLast + 1})`,
        clipPath: `inset(0 ${noOfCharactersToBlinkAtLast}ch 0 0)`,
        ...style
      }} />
  )
}
