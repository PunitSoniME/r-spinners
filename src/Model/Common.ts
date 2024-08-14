import { CSSProperties } from 'react';

type CommonProps = {
  color?: string;
  style?: CSSProperties;
  /**
   * @type number ( in seconds )
   * @description Enter the duration to complete 1 animation cycle
   * @default 2 seconds
   */
  animationDuration?: number;
  stop?: boolean;
};

export default CommonProps;
