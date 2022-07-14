import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  25% { background-position: calc(1*100%/3) 0 }
  50% { background-position: calc(2*100%/3) 0 }
  75% { background-position: calc(3*100%/3) 0 }
  100% { background-position: calc(4*100%/3) 0 }
`;

const defaultColors = ["#000", "#b91c1c", "#0369a1", "#15803d"];

const ClassicSpinner10Wrapper = styled.div.attrs(
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
  background: linear-gradient(90deg, ${props => props.colors[0]} 25%, ${props => props.colors[1]} 0 50%, ${props => props.colors[2]} 0 75%, ${props => props.colors[3]} 0) 0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${animation};
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

export default function ClassicSpinner10({
  text,
  colors,
  size = "1rem",
  style = {},
  speed = 1
}: IProps) {

  const updatedSpeed = speed === 0 ? 4 : 4 / speed;

  return (
    <ClassicSpinner10Wrapper
      text={text}
      colors={colors}
      style={{
        animationDuration: `${updatedSpeed}s`,
        fontSize: size,
        ...style
      }} />
  )
}
