import React from 'react'
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

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

interface IProps extends ICommonProps {
  text: string;
  size?: number | string;
}

export default function ClassicSpinner6({
  text,
  color,
  size = "1rem",
  style = {},
  speed = 1,
  stop = false
}: IProps) {

  const updatedSpeed = speed === 0 ? 2 : 2 / speed;

  return (
    <ClassicSpinner6Wrapper
      text={text}
      color={color}
      style={{
        fontSize: size,
        textShadow: `0 0 var(--c), ${text.length + 1}ch 0 var(--c)`,
        animationDuration: `${updatedSpeed}s`,
        animationPlayState: stop ? "paused" : "running",
        ...style
      }} />
  )
}
