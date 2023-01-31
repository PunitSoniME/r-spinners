import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to {
    opacity: 0;
  }
`;

const ClassicSpinner1Wrapper = styled.div.attrs(props => ({
	text: props['text'],
	color: props['color'] || '#000',
}))`
	&:before {
		content: '${props => props.text}';
	}
	font-weight: bold;
	font-family: monospace;
	animation-name: ${animation};
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	color: ${props => props.color};
`;

interface IProps extends ICommonProps {
	text: string;
	size?: number | string;
}

export default function ClassicSpinner1({
	text,
	color,
	size = '1rem',
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 1 : 1 / speed;

	return (
		<ClassicSpinner1Wrapper
			text={text}
			color={color}
			style={{
				fontSize: size,
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
