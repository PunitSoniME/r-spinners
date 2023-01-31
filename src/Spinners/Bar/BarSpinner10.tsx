import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  33%  { background-position: 0   0   , 100% 100% }
  66%  { background-position: 0   100%, 100% 0   }
  100% { background-position: 50% 100%, 50%  0   }
`;

const BarSpinner10Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '45px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 1.2;
	--c: no-repeat
		repeating-linear-gradient(90deg, ${props => props.color} 0 20%, #0000 0 40%);
	background: var(--c) 50% 0, var(--c) 50% 100%;
	background-size: calc(500% / 6) 50%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function BarSpinner10({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<BarSpinner10Wrapper
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
