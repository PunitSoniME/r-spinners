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

const RoundedSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    color: props?.color,
    size: props?.size,
    animationDuration: props.animationDuration,
    animationPlayState: props?.stop ? 'paused' : 'running',
    secondaryColor: props['secondaryColor'],
    thickness: props['thickness'],
    dotColor: props['dotColor'],
    style: props?.style,
  })
)`
  display: inline-block;

  animation-iteration-count: infinite;
  animation-play-state: ${(props) => props.animationPlayState};

  ${(props) => {
    return GeneratedCSS[props.variant] || GeneratedCSS.variant1;
  }}
  ${(props) => props?.style}
`;

type ConditionalProps =
  | {
      variant: 'variant7' | 'variant8' | 'variant10';
    }
  | {
      variant: 'variant2';
      thickness: number;
      secondaryColor: string;
    }
  | {
      variant: 'variant1' | 'variant3' | 'variant4' | 'variant5';
      thickness: number;
    }
  | {
      variant: 'variant6' | 'variant9';
      dotColor: string;
    };

export type Props = CommonProps &
  ConditionalProps & {
    size?: string;
  };

export default function RoundedSpinner(props: Props) {
  const { style, rest } = updateProps('Rounded', props);

  return <RoundedSpinnerWrapper {...rest} style={style} />;
}
