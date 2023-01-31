import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { 
    background-position: left; 
    -webkit-mask-position:left 
  }
`;

const ContinuousSpinner6Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	height: (props['height']
		? typeof props['height'] === 'number'
			? `${props['height']}px`
			: props['height']
		: '20px') as number | string,
	width: (props['width']
		? typeof props['width'] === 'number'
			? `${props['width']}px`
			: props['width']
		: '120px') as number | string,
}))`
	height: ${props => props.height};
	width: ${props => props.width};
	background: radial-gradient(circle 10px, ${props => props.color} 95%, #0000)
			right/calc(200% + 20px) 100%,
		linear-gradient(${props => props.color} 0 0) center/100% 6px;
	background-repeat: no-repeat;
	-webkit-mask: radial-gradient(circle 4px, #0000 93%, ${props => props.color})
		right/calc(200% + 20px) 100%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;
}

export default function ContinuousSpinner6({
	height,
	width,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<ContinuousSpinner6Wrapper
			height={height}
			width={width}
			color={color}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
