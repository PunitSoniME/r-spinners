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

const ProgressSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    color: props['color'],
    color1: props['color1'],
    color2: props['color2'],
    bgColor: props['bgColor'],
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
      variant: 'variant1' | 'variant4' | 'variant5' | 'variant6' | 'variant9';
      color: string;
    }
  | {
      variant: 'variant2' | 'variant7' | 'variant8' | 'variant';
      color: string;
      bgColor: string;
    }
  | {
      variant: 'variant3';
      color1: string;
      color2: string;
    };

export type Props = CommonProps &
  ConditionalProps & {
    height: string;
    width: string;
  };

export default function ProgressSpinner(props: Props) {
  const { style, rest } = updateProps('Progress', props);

  return <ProgressSpinnerWrapper {...rest} style={style} />;
}
