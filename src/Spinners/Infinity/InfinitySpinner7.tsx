import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: 0 50% };
`;

const InfinitySpinner7Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	height: (props['height']
		? typeof props['height'] === 'number'
			? `${props['height']}px`
			: props['height']
		: '14px') as number | string,
	width: (props['width']
		? typeof props['width'] === 'number'
			? `${props['width']}px`
			: props['width']
		: '90px') as number | string,
}))`
	height: ${props => props.height};
	width: ${props => props.width};
	background: linear-gradient(90deg, ${props => props.color} 50%, #0000 0)
			repeat-x,
		conic-gradient(
			from 45deg at right 7px top 50%,
			${props => props.color} 90deg,
			#0000 0
		);
	background-position: calc(100% / 3) 50%;
	background-size: calc(100% / 4) 60%, calc(100% / 4) 100%;
	animation-name: ${animation};
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;
}

export default function InfinitySpinner7({
	height,
	width,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 0.5 : 0.5 / speed;

	return (
		<InfinitySpinner7Wrapper
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
