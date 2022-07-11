import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-size: 100% 3px;
  }
`;

const ClassicSpinner2Wrapper = styled.div.attrs(
  props => ({
    text: props["text"],
    color: props["color"] || "#000",
  }))`
  &:before {
    content: "${props => props.text}";
  }
  font-weight: bold;
  font-family: monospace;
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
  padding-bottom: 8px;
  animation-name: ${animation};
  animation-delay: linear;
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

export default function ClassicSpinner2({
  text,
  color,
  size = "1rem",
  style = {},
  animationTime = "1s"
}: IProps) {
  return (
    <ClassicSpinner2Wrapper
      color={color}
      text={text}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        ...style
      }} />
  )
}
