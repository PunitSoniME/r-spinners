import React from 'react';
import styled from 'styled-components';
import CommonProps from '../../Model/Common';
import {
  variant1,
  variant2,
  variant3,
  variant4,
  variant5,
  variant6,
  variant7,
  variant8,
  variant9,
  variant10,
} from './variants';
import { updateProps } from '../../utils';

const GeneratedCSS = {
  variant1: variant1,
  variant2: variant2,
  variant3: variant3,
  variant4: variant4,
  variant5: variant5,
  variant6: variant6,
  variant7: variant7,
  variant8: variant8,
  variant9: variant9,
  variant10: variant10,
};

type WrapperProps = Props;

const WobblingSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    color: props['color'],
    bgColor: props['bgColor'],
    stickColor: props['stickColor'],
    height: props['height'],
    width: props['width'],
    animationDuration: Boolean(props?.animationDuration)
      ? props?.animationDuration
      : 2,
    animationPlayState: props?.stop ? 'paused' : 'running',
    style: props?.style,
  })
)`
  animation-duration: ${(props) => props.animationDuration}s;
  animation-play-state: ${(props) => props.animationPlayState};

  ${(props) => {
    return GeneratedCSS[props.variant] || GeneratedCSS.variant1;
  }}
  ${(props) => props?.style}
`;

type ConditionalProps =
  | {
      variant: 'variant3' | 'variant4' | 'variant7' | 'variant9' | 'variant10';
    }
  | {
      variant: 'variant1' | 'variant2' | 'variant5' | 'variant6';
      bgColor: string;
    }
  | {
      variant: 'variant8';
      stickColor: string;
    };

export type Props = CommonProps &
  ConditionalProps & {
    color: string;
    height: string;
    width: string;
  };

export default function WobblingSpinner(props: Props) {
  const { style, rest } = updateProps('Wobbling', props);

  return <WobblingSpinnerWrapper {...rest} style={style} />;
}
