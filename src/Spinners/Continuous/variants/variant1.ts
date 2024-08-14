import { css, keyframes } from 'styled-components';

const animation = keyframes`
    0% { background-position: right; }
`;

export const defaultValues = {
  color: '#514b82',
  height: '20px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height || defaultValues.height};
  width: ${(props) => props.width || defaultValues.width};

  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%)
    ${(props) => props.color};
  background-size: 300% 100%;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default CSS;
