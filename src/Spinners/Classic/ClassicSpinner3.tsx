import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-position: 80% 100%
  }
`;

// 

const ClassicSpinner3Wrapper = styled.div`
    background: repeating-linear-gradient(90deg,currentColor 0 8%,#0000 0 10%) 200% 100%/200% 3px no-repeat;
    padding: 0 5px 8px 0;
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

export default function ClassicSpinner3({ text = "Loading...", steps = 6, size = "1rem", style = {}, animationTime = "1s" }: IProps) {
  return (
    <ClassicSpinner3Wrapper style={{
      fontSize: size,
      animationDuration: animationTime,
      animationTimingFunction: `steps(${steps})`,
      ...style
    }}>{text}</ClassicSpinner3Wrapper>
  )
}
