import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = () => keyframes`
  to {
    background-position: left;
  }
`;

const ClassicSpinner8Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    color: props["color"] || "#000",
    animationColor: props["animationColor"],
  }))`
  &:before {
    content: "${props => props.text}";
  }
  color: #0000;
  font-weight: bold;
  font-family: monospace;
  background: linear-gradient(90deg, ${props => props.color} calc(50% - 0.5ch), ${props => props.animationColor} 0 calc(50% + 0.5ch), ${props => props.color} 0) right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`

interface IProps {
  text: string;
  animationColor: string;
  color?: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner8({
  text,
  color,
  animationColor,
  size = "1rem",
  style = {},
  animationTime = "1s",
}: IProps) {
  return (
    <ClassicSpinner8Wrapper
      text={text}
      color={color}
      animationColor={animationColor}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        animationTimingFunction: `steps(${text.length + 1})`,
        ...style
      }} />
  )
}