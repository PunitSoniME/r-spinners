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

const DotSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    color: props['color'],
    size: props['size'],
    animationDuration: Boolean(props?.animationDuration)
      ? props?.animationDuration
      : 2,
    animationPlayState: props?.stop ? 'paused' : 'running',
    gap: props['gap'],
    style: props?.style,
  })
)`
  animation-iteration-count: infinite;
  animation-play-state: ${(props) => props.animationPlayState};

  ${(props) => {
    return GeneratedCSS[props.variant] || GeneratedCSS.variant1;
  }}
  ${(props) => props?.style}
`;

type ConditionalProps =
  | {
      variant:
        | 'variant1'
        | 'variant2'
        | 'variant3'
        | 'variant4'
        | 'variant5'
        | 'variant6'
        | 'variant7'
        | 'variant8'
        | 'variant9';
    }
  | {
      variant: 'variant10';
      gap: string;
    };

export type Props = CommonProps &
  ConditionalProps & {
    color: string;
    size: string;
  };

export default function DotSpinner(props: Props) {
  const { style, rest } = updateProps('Dot', props);

  return <DotSpinnerWrapper {...rest} style={style} />;
}
