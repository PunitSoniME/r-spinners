import React from 'react'
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

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

interface IProps extends ICommonProps {
  text: string;
  noOfCharactersToBlinkAtLast: number;
  size?: number | string;
}

export default function ClassicSpinner4({
  text,
  color,
  size = "1rem",
  style = {},
  speed = 1,
  noOfCharactersToBlinkAtLast = 3,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 1 : 1 / speed;

  return (
    <ClassicSpinner4Wrapper
      text={text}
      color={color}
      style={{
        fontSize: size,
        clipPath: `inset(0 ${noOfCharactersToBlinkAtLast}ch 0 0)`,
        animationDuration: `${updatedSpeed}s`,
        animationTimingFunction: `steps(${noOfCharactersToBlinkAtLast + 1})`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
