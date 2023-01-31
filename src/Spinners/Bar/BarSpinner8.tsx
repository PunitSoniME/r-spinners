import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  16.67% { background-position: 0% 0%  , 50% 100%, 100% 100% }
  33.33% { background-position: 0% 0%  , 50% 0%  , 100% 100% }
  50%    { background-position: 0% 0%  , 50% 0%  , 100% 0%   }
  66.67% { background-position: 0% 100%, 50% 0%  , 100% 0%   }
  83.33% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`;

const BarSpinner8Wrapper = styled.div.attrs(props => ({
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
	background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
	background-size: 20% 65%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function BarSpinner8({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<BarSpinner8Wrapper
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
