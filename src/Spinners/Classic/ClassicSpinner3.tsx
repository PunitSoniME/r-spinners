import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-position: 80% 100%
  }
`;

const ClassicSpinner3Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    color: props["color"] || "#000",
  }))`
  &:before {
    content: "${props => props.text}";
  }
  font-weight: bold;
  font-family: monospace;
  background: repeating-linear-gradient(90deg, currentColor 0 8%, #0000 0 10%) 200% 100%/200% 3px no-repeat;
  padding: 0 5px 8px 0;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  color: ${props => props.color};
`

interface IProps {
  text: string;
  color?: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner3({
  text,
  color,
  size = "1rem",
  style = {},
  animationTime = "1s"
}: IProps) {
  return (
    <ClassicSpinner3Wrapper
      color={color}
      text={text}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        animationTimingFunction: `steps(6)`,
        ...style
      }} />
  )
}
