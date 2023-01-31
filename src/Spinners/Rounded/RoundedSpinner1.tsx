import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to{ transform: rotate(.5turn) }
`;

const RoundedSpinner1Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '50px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 1;
	border-radius: 50%;
	border: 8px solid;
	border-color: ${props => props.color} #0000;
	animation-name: ${animation};
	animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function RoundedSpinner1({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<RoundedSpinner1Wrapper
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
