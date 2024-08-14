import { css, keyframes } from 'styled-components';

const animation = (colors, text) => keyframes`
  25% {text-shadow: -${text.length + 1}ch 0 ${colors[0]}, 0ch 0 ${colors[1]}, ${
  text.length + 1
}ch 0 ${colors[2]}, ${text.length + 2}ch 0 ${colors[3]}, ${
  text.length + 3
}ch 0 ${colors[0]}}
  50% {text-shadow: -${text.length + 2}ch 0 ${colors[0]}, -${
  text.length + 1
}ch 0 ${colors[1]},  0ch 0 ${colors[2]}, ${text.length + 1}ch 0 ${colors[3]}, ${
  text.length + 2
}ch 0 ${colors[0]}}
  75% {text-shadow: -${text.length + 3}ch 0 ${colors[0]}, -${
  text.length + 2
}ch 0 ${colors[1]}, -${text.length + 1}ch 0 ${colors[2]},  0ch 0 ${
  colors[3]
}, ${text.length + 1}ch 0 ${colors[0]}}
  100%{text-shadow: -${text.length + 4}ch 0 ${colors[0]}, -${
  text.length + 3
}ch 0 ${colors[1]}, -${text.length + 2}ch 0 ${colors[2]}, -${
  text.length + 1
}ch 0 ${colors[3]}, 0ch 0 ${colors[0]}}
`;

export const defaultValues = {
  color: '#1e293b',
  size: '1.5rem',
  animationDuration: 3,
  colors: ['#000', '#b91c1c', '#0369a1', '#15803d'],
};

const CSS = css`
  font-size: ${(props) => props.fontSize || defaultValues.size};
  color: ${(props) => props.color || defaultValues.color};

  &:before {
    content: '${(props) => props.text}';
  }
  color: #0000;
  font-weight: bold;
  font-family: monospace;
  overflow: hidden;
  text-shadow: 0 0 ${(props) => props.colors[0] || defaultValues.colors[0]},
    ${(props) => props.text.length + 1}ch 0
      ${(props) => props.colors[1] || defaultValues.colors[1]},
    ${(props) => props.text.length + 2}ch 0
      ${(props) => props.colors[2] || defaultValues.colors[2]},
    ${(props) => props.text.length + 3}ch 0
      ${(props) => props.colors[3] || defaultValues.colors[3]},
    ${(props) => props.text.length + 4}ch 0
      ${(props) => props.colors[0] || defaultValues.colors[0]};
  animation-name: ${(props) => animation(props.colors, props.text)};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
