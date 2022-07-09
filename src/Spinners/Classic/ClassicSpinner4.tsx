import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0);
  }
`;

const ClassicSpinner4Wrapper = styled.div`
    clip-path: inset(0 3ch 0 0);
    animation-name: ${animation};
    animation-iteration-count: infinite;
`

interface IProps {
  text: string;
  steps?: number;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner4({ text = "Loading...", steps = 6, size = "1rem", style = {}, animationTime = "1s" }: IProps) {
  return (
    <ClassicSpinner4Wrapper style={{
      fontSize: size,
      animationDuration: animationTime,
      animationTimingFunction: `steps(${steps})`,
      ...style
    }}>{text}</ClassicSpinner4Wrapper>
  )
}
