import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  50% { background-position: right }
`;

const WobblingSpinner2Wrapper = styled.div.attrs(props => ({
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
	border-radius: 20px;
	background: radial-gradient(farthest-side, ${props => props.color} 94%, #0000)
		left/20px 20px no-repeat ${props => props => props.bgColor};
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;

	bgColor?: string;
}

export default function WobblingSpinner2({
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
		<WobblingSpinner2Wrapper
			height={height}
			width={width}
			color={color}
			bgColor={bgColor}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
