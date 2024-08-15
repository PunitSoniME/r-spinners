import { css, keyframes } from 'styled-components';

const animation = () => keyframes`
	100% { background-position: top left }
`;

export const defaultValues = {
  color: '#514b82',
  height: '40px',
  width: '40px',
  animationDuration: 2,
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: linear-gradient(
      to bottom right,
      #0000 calc(50% - 40px),
      #fff 50%,
      #0000 calc(50% + 40px)
    )
    bottom right/calc(200% + 80px) calc(200% + 80px)
    ${(props) => props.color || defaultValues.color};
  animation-name: ${animation};
  animation-duration: ${(props) =>
    props.animationDuration || defaultValues.animationDuration}s;
`;

export default CSS;
