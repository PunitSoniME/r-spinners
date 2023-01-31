import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: right -25% top 0 }
`;

const ContinuousSpinner7Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	bgColor: props['bgColor'] || '#eee',
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
	-webkit-mask: linear-gradient(90deg, ${props => props.color} 70%, #0000 0)
		left/20% 100%;
	background: linear-gradient(${props => props.color} 0 0) left -25% top 0 /20%
		100% no-repeat ${props => props.bgColor};
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;

	bgColor?: string;
}

export default function ContinuousSpinner7({
	height,
	width,
	color,
	bgColor,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<ContinuousSpinner7Wrapper
			height={height}
			width={width}
			color={color}
			bgColor={bgColor}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationTimingFunction: `steps(6)`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
