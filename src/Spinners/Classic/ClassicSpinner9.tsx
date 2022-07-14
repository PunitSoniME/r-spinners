import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = (colors, text) => keyframes`
  25% {text-shadow: -${text.length + 1}ch 0 ${colors[0]}, 0ch 0 ${colors[1]}, ${text.length + 1}ch 0 ${colors[2]}, ${text.length + 2}ch 0 ${colors[3]}, ${text.length + 3}ch 0 ${colors[0]}}
  50% {text-shadow: -${text.length + 2}ch 0 ${colors[0]}, -${text.length + 1}ch 0 ${colors[1]},  0ch 0 ${colors[2]}, ${text.length + 1}ch 0 ${colors[3]}, ${text.length + 2}ch 0 ${colors[0]}}
  75% {text-shadow: -${text.length + 3}ch 0 ${colors[0]}, -${text.length + 2}ch 0 ${colors[1]}, -${text.length + 1}ch 0 ${colors[2]},  0ch 0 ${colors[3]}, ${text.length + 1}ch 0 ${colors[0]}}
  100%{text-shadow: -${text.length + 4}ch 0 ${colors[0]}, -${text.length + 3}ch 0 ${colors[1]}, -${text.length + 2}ch 0 ${colors[2]}, -${text.length + 1}ch 0 ${colors[3]}, 0ch 0 ${colors[0]}}
`;

const defaultColors = ["#000", "#b91c1c", "#0369a1", "#15803d"];

const ClassicSpinner9Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    colors: (props["colors"] && props["colors"].length === 4 ? props["colors"] : defaultColors) || defaultColors,
  }))`
  &:before {
    content: "${props => props.text}";
  }
  color: #0000;
  font-weight: bold;
  font-family: monospace;
  overflow: hidden;
  text-shadow: 0 0 ${props => props.colors[0]}, ${props => props.text.length + 1}ch 0 ${props => props.colors[1]}, ${props => props.text.length + 2}ch 0 ${props => props.colors[2]}, ${props => props.text.length + 3}ch 0 ${props => props.colors[3]}, ${props => props.text.length + 4}ch 0 ${props => props.colors[0]};
  animation-name: ${props => animation(props.colors, props.text)};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
`

interface IProps {
  text: string;
  colors: string[];
  size?: number | string;
  style?: object;
  speed?: number;
}

export default function ClassicSpinner9({
  text,
  colors,
  size = "1rem",
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 5 : 5 / speed;

  return (
    <ClassicSpinner9Wrapper
      text={text}
      colors={colors}
      style={{
        animationDuration: `${updatedSpeed}s`,
        fontSize: size,
        ...style
      }} />
  )
}
