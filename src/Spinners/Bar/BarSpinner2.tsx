import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
  20% { background-size: 20% 60% , 20% 100%, 20% 100% }
  40% { background-size: 20% 80% , 20% 60% , 20% 100% }
  60% { background-size: 20% 100%, 20% 80% , 20% 60%  }
  80% { background-size: 20% 100%, 20% 100%, 20% 80%  }
  100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`;

const BarSpinner2Wrapper = styled.div.attrs(props => ({
	color: props['color'] || 'currentColor',
	size: (props['size']
		? typeof props['size'] === 'number'
			? `${props['size']}px`
			: props['size']
		: '45px') as number | string,
}))`
	width: ${props => props.size};
	aspect-ratio: 1;
	--c: no-repeat linear-gradient(${props => props.color} 0 0);
	background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
	animation-name: ${animation};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

interface IProps extends ICommonProps {
	size?: number | string;
}

export default function BarSpinner2({
	size,
	color,
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<BarSpinner2Wrapper
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
