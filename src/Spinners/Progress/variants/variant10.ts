import { css, keyframes } from 'styled-components';

const animation = keyframes`
	100% { background-size: 120% 120% }
`;

export const defaultValues = {
  color: '#dc2626',
  bgColor: '#eee',
  height: '60px',
  width: '120px',
};

const CSS = css`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 200px 200px 0 0;
  -webkit-mask: repeating-radial-gradient(
    farthest-side at bottom,
    #0000 0,
    #000 1px 12%,
    #0000 calc(12% + 1px) 20%
  );
  background: radial-gradient(
      farthest-side at bottom,
      ${(props) => props.color} 0 95%,
      #0000 0
    )
    bottom/0% 0% no-repeat ${(props) => props.bgColor};
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-timing-function: steps(6);
`;

export default CSS;
