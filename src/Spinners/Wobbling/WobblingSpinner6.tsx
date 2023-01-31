import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  50% {background-position: right }
`;

const WobblingSpinner6Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	bgColor: props['bgColor'] || '#eee',
	height: (props['height']
		? typeof props['height'] === 'number'
			? `${props['height']}px`
			: props['height']
		: '21px') as number | string,
	width: (props['width']
		? typeof props['width'] === 'number'
			? `${props['width']}px`
			: props['width']
		: '120px') as number | string,
}))`
	height: ${props => props.height};
	width: ${props => props.width};
	background: linear-gradient(${props => props.color} 0 0) left/10px 100%
		no-repeat ${props => props.bgColor};
	position: relative;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0, 0.2, 1, 1);

	&:before,
	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		height: 7px;
		background: linear-gradient(${props => props.color} 0 0) left/10px 100%
			no-repeat ${props => props.bgColor};
		animation: inherit;
	}
	&:before {
		top: 0;
		animation-timing-function: cubic-bezier(0, 0, 1, 1);
	}
	&:after {
		bottom: 0;
		animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
	}
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;

	bgColor?: string;
}

export default function WobblingSpinner6({
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
		<WobblingSpinner6Wrapper
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
