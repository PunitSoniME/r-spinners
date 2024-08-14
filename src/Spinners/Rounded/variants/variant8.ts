import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	to { transform: rotate(.5turn) }
`;

const CSS = css`
  width: ${(props) => props.size};
  aspect-ratio: 1;
  color: ${(props) => props.color};
  --_c: no-repeat
    radial-gradient(farthest-side, ${(props) => props.color} 92%, #0000);
  background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px,
    var(--_c) 50% 50%/12px 12px,
    conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        ${(props) => props.color} 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px);
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
