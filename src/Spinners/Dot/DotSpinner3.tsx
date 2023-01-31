import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  20% { background-position: 0%   0%, 50%  50%, 100%  50% }
  40% { background-position: 0% 100%, 50%   0%, 100%  50% }
  60% { background-position: 0%  50%, 50% 100%, 100%   0% }
  80% { background-position: 0%  50%, 50%  50%, 100% 100% }
`;

const DotSpinner3Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '60px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 2;
	--_g: no-repeat
		radial-gradient(circle closest-side, ${props => props.color} 90%, #0000);
	background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
	background-size: calc(100% / 3) 50%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function DotSpinner3({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<DotSpinner3Wrapper
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
