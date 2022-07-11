import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 0;
  }
`;

const ClassicSpinner1Wrapper = styled.div.attrs(
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
  animation-delay: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  color: ${props => props.color};
`;

interface IProps {
  text: string;
  color?: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner1({
  text,
  color,
  size = "1rem",
  style = {},
  animationTime = "1s"
}: IProps) {
  return (
    <ClassicSpinner1Wrapper
      text={text}
      color={color}
      style={{
        fontSize: size,
        animationDuration: animationTime,
        ...style
      }} />
  )
}
