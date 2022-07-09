import React from 'react'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    background-size: 100% 3px;
  }
`;

const ClassicSpinner2Wrapper = styled.div`
    background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
    padding-bottom: 8px;
    animation-name: ${animation};
    animation-delay: linear;
    animation-iteration-count: infinite;
`

interface IProps {
  text: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner2({ text = "Loading...", size = "1rem", style = {}, animationTime = "1s" }: IProps) {
  return (
    <ClassicSpinner2Wrapper style={{
      fontSize: size,
      animationDuration: animationTime,
      ...style
    }}>{text}</ClassicSpinner2Wrapper>
  )
}
