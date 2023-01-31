import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  33% { background-position: 0% 0%  , 50% 100%,100% 0%   }
  66% { background-position: 0% 100%, 50% 0%  ,100% 100% }
`;

const BarSpinner9Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '45px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 0.75;
	--c: no-repeat linear-gradient(${props => props.color} 0 0);
	background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
	background-size: 20% 60%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function BarSpinner9({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<BarSpinner9Wrapper
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
