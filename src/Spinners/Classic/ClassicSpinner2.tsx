import React from 'react';
import styled, { keyframes } from 'styled-components';
import ICommonProps from '../../Model/Common';

const animation = keyframes`
  to {
    background-size: 100% 3px;
  }
`;

const ClassicSpinner2Wrapper = styled.div.attrs(props => ({
	text: props['text'],
	color: props['color'] || '#000',
}))`
	&:before {
		content: '${props => props.text}';
	}
	font-weight: bold;
	font-family: monospace;
	background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
	padding-bottom: 8px;
	animation-name: ${animation};
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	color: ${props => props.color};
`;

interface IProps extends ICommonProps {
	text: string;
	size?: number | string;
}

export default function ClassicSpinner2({
	text,
	color,
	size = '1rem',
	style = {},
	speed = 1,
	stop = false,
}: IProps) {
	const updatedSpeed = speed === 0 ? 2 : 2 / speed;

	return (
		<ClassicSpinner2Wrapper
			color={color}
			text={text}
			style={{
				fontSize: size,
				animationDuration: `${updatedSpeed}s`,
				animationPlayState: stop ? 'paused' : 'running',
				...style,
			}}
		/>
	);
}
