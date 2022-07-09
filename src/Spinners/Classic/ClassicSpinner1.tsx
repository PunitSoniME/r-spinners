import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 0;
  }
`;

const ClassicSpinner1Wrapper = styled.div`
  animation-name: ${animation};
  animation-delay: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

interface IProps {
  text: string;
  size?: number | string;
  style?: object;
  animationTime?: string;
}

export default function ClassicSpinner1({ text = "Loading...", size = "1rem", style = {}, animationTime = "1s" }: IProps) {
  return (
    <ClassicSpinner1Wrapper style={{
      fontSize: size,
      animationDuration: animationTime,
      ...style
    }}>{text}</ClassicSpinner1Wrapper>
  )
}
