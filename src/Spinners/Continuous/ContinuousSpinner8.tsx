import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  100% { background-position: top left }
`;

const ContinuousSpinner8Wrapper = styled.div.attrs(props => ({
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
		: '40px') as number | string,
}))`
	height: ${props => props.height};
	width: ${props => props.width};
	background: linear-gradient(
			to bottom right,
			#0000 calc(50% - 40px),
			#fff 50%,
			#0000 calc(50% + 40px)
		)
		bottom right/calc(200% + 80px) calc(200% + 80px) ${props => props.color};
	animation-name: ${animation};
	animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;
}

export default function ContinuousSpinner8({
	height,
	width,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<ContinuousSpinner8Wrapper
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
