import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to { transform: rotate(1turn) }
`;

const RoundedSpinner2Wrapper = styled.div.attrs(props => ({
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '50px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 1;
	border-radius: 50%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	size?: number | string;
	thickness?: number;
	secondaryColor?: string;
}

export default function RoundedSpinner2({
	size,
	color = 'currentColor',
	style = {},
	speed = 1,
	thickness = 8,
	secondaryColor = '#cbd5e1',
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<RoundedSpinner2Wrapper
			size={size}
			color={color}
			style={{
				border: `${thickness}px solid ${secondaryColor}`,
				borderRightColor: color,
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
