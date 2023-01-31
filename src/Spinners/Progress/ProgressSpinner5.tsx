import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-size: 120% }
`;

const ProgressSpinner5Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	height: (props['height']
		? typeof props['height'] === 'number'
			? `${props['height']}px`
			: props['height']
		: '40px') as number | string,
	width: (props['width']
		? typeof props['width'] === 'number'
			? `${props['width']}px`
			: props['width']
		: '80px') as number | string,
}))`
  height: ${props => props.height};
  width: ${props => props.width};
  border: 2px solid ${props => props.color};
  border-right-color: transparent;
  padding:3px;
  background: 
    repeating-linear-gradient(90deg, ${props =>
			props.color} 0 10px, #0000 0 15px) 
    0/0% no-repeat content-box content-box;
  position: relative;
  animation-name: ${animation};
  animation-iteration-count: infinite;

  &:before {
    content:"";
    position: absolute;
    top:-2px;
    bottom:-2px;
    left:100%;
    width:10px;
    background:
      linear-gradient(
          #0000   calc(50% - 7px), ${props => props.color} 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px), ${props =>
						props.color} 0 calc(50% + 7px),#0000 0) left /100% 100%,
      linear-gradient(${props =>
				props.color} calc(50% - 5px),#0000        0 calc(50% + 5px), ${props =>
	props.color} 0) left /2px 100%,
      linear-gradient(#0000 calc(50% - 5px), ${props =>
				props.color} 0 calc(50% + 5px),#0000        0) right/2px 100%;
    background-repeat:no-repeat;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;
}

export default function ProgressSpinner5({
	height,
	width,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 2 : 2 / speed;

	return (
		<ProgressSpinner5Wrapper
			height={height}
			width={width}
			color={color}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationTimingFunction: `steps(6)`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
