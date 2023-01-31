import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(.5turn) }
`;

const RoundedSpinner5Wrapper = styled.div.attrs(props => ({
	color: props['color'],
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '50px') as number | string,
	thickness: props['thickness'],
}))`
	width: ${props => props.size};
	--b: ${props => props.thickness}px; /* the border thickness */
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${props => props.color};
	-webkit-mask: repeating-conic-gradient(
			#0000 0deg,
			${props => props.color} 1deg 70deg,
			#0000 71deg 90deg
		),
		radial-gradient(
			farthest-side,
			#0000 calc(100% - var(--b) - 1px),
			${props => props.color} calc(100% - var(--b))
		);
	-webkit-mask-composite: destination-in;
	mask-composite: intersect;
	animation-name: ${animation};
	animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
	size?: number | string;
	thickness?: number;
}

export default function RoundedSpinner5({
	size,
	color = 'currentColor',
	style = {},
	speed = 1,
	thickness = 4,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<RoundedSpinner5Wrapper
			size={size}
			color={color}
			thickness={thickness}
			style={{
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
