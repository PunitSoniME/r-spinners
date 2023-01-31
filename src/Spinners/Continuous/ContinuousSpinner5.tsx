import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: right -40px top 0, center }
`;

const ContinuousSpinner5Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	secondaryColor: props['secondaryColor'] || '#eee',
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
	background: linear-gradient(${props => props.color} 0 0) left -40px top 0/40px
			20px,
		linear-gradient(${props => props.secondaryColor} 0 0) center/100% 50%;
	background-repeat: no-repeat;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;

	secondaryColor?: number | string;
}

export default function ContinuousSpinner5({
	height,
	width,
	color,
	secondaryColor,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<ContinuousSpinner5Wrapper
			height={height}
			width={width}
			color={color}
			secondaryColor={secondaryColor}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
