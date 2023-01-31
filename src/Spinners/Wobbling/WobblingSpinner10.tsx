import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation1 = keyframes`
  0%,49.99% { transform: scaleX(1) }
  50%,100% { transform: scaleX(-1) } 
`;

const animation2 = keyframes`
  100% { transform: rotate(1turn) }
`;

const WobblingSpinner10Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	bgColor: props['bgColor'] || '#eee',
	animationDuration: props['animationDuration'],
	animationPlayState: props['animationPlayState'],
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
	width: calc(100px - 14px);
	height: 50px;
	border-radius: 50px;
	background: radial-gradient(
				farthest-side,
				#0000 calc(100% - 15px),
				${props => props.bgColor} calc(100% - 14px) 99%,
				#0000
			)
			left,
		radial-gradient(
				farthest-side,
				#0000 calc(100% - 15px),
				${props => props.bgColor} calc(100% - 14px) 99%,
				#0000
			)
			right;
	background-size: calc(50% + 7px) 100%;
	background-repeat: no-repeat;
	position: relative;
	animation-name: ${animation1};
	animation-iteration-count: infinite;
	animation-timing-function: linear;

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		margin: auto;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${props => props.color};
		transform-origin: -14px 50%;

		animation-name: ${animation2};
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: ${props => props.animationDuration};
		animation-play-state: ${props => props.animationPlayState};
	}
`;

interface IProps extends ICommonProps {
	height?: number | string;
	width?: number | string;

	bgColor?: string;
}

export default function WobblingSpinner10({
	height,
	width,
	color,
	bgColor,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 0.5 : speed / 2;

	return (
		<WobblingSpinner10Wrapper
			height={height}
			width={width}
			color={color}
			bgColor={bgColor}
			animationDuration={`${updatedSpeed}s`}
			animationPlayState={stop ? 'paused' : 'running'}
			style={{
				animationDuration: `${speed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
