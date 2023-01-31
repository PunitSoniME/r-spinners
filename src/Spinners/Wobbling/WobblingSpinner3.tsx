import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  50% { 
    left: 100%;
    transform: translateX(calc(-100% - 4px))
  }
`;

const WobblingSpinner3Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	speed: props['speed'],
	animationPlayState: props['animationPlayState'],
	height: (props['height']
		? typeof props['height'] === 'number'
			? `${props['height']}px`
			: props['height']
		: '22px') as number | string,
	width: (props['width']
		? typeof props['width'] === 'number'
			? `${props['width']}px`
			: props['width']
		: '120px') as number | string,
}))`
	height: ${props => props.height};
	width: ${props => props.width};
	border-radius: 40px;
	color: ${props => props.color};
	border: 2px solid;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		margin: 2px;
		width: 25%;
		top: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		background: currentColor;
		animation-name: ${animation};
		animation-duration: ${props => props.speed}s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-play-state: ${props => props.animationPlayState};
	}
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;
}

export default function WobblingSpinner3({
	height,
	width,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<WobblingSpinner3Wrapper
			height={height}
			width={width}
			color={color}
			speed={updatedSpeed}
			animationPlayState={stop ? 'paused' : 'running'}
			style={{
				...style,
			}}
		/>
	);
}
