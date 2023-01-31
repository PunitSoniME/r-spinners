import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = color => keyframes`
  0%  { box-shadow: 15px 0 ${color}, -25px 0 ${color} }
  50% { box-shadow: 15px 0 ${color}, -15px 0 ${color} }
  100% { box-shadow: 25px 0 ${color}, -15px 0 ${color} }
`;

const DotSpinner6Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '15px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 1;
	background: ${props => props.color};
	border-radius: 50%;
	animation-name: ${props => animation(props.color)};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-direction: alternate;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function DotSpinner6({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<DotSpinner6Wrapper
			size={size}
			color={color}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
