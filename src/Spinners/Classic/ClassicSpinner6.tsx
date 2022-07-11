import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = (characters) => keyframes`
  to {
    text-shadow: -${characters + 1}ch 0 var(--c), 0ch 0 var(--c) };
  }
`;

const ClassicSpinner6Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    color: props["color"] || "#000",
  }))`
  &:before {
    content: "${props => props.text}";
  }
  --c: ${props => props.color};
  color: #0000;
  overflow: hidden;
  font-weight: bold;
  font-family: monospace;
  animation-name: ${props => animation(props.text.length)};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

interface IProps {
  text: string;
  color?: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner6({
  text,
  color,
  size = "1rem",
  style = {},
  animationTime = "1s"
}: IProps) {
  return (
    <ClassicSpinner6Wrapper
      text={text}
      color={color}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        textShadow: `0 0 var(--c), ${text.length + 1}ch 0 var(--c)`,
        ...style
      }} />
  )
}
