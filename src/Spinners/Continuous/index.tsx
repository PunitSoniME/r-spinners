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

const ContinuousSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    color: props['color'],
    bgColor: props['bgColor'],
    secondaryColor: props['secondaryColor'],
    dotColor: props['dotColor'],
    height: props['height'],
    width: props['width'],
    animationDuration: props?.animationDuration,
    animationPlayState: props?.stop ? 'paused' : 'running',
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
      variant: 'variant1' | 'variant4' | 'variant6' | 'variant8';
    }
  | {
      variant: 'variant2' | 'variant3' | 'variant7' | 'variant10';
      bgColor: string;
    }
  | {
      variant: 'variant5';
      secondaryColor: string;
    }
  | {
      variant: 'variant9';
      dotColor: string;
    };

export type Props = CommonProps &
  ConditionalProps & {
    height: string;
    width: string;
  };

export default function ContinuousSpinner(props: Props) {
  const { style, rest } = updateProps('Continuous', props);

  return <ContinuousSpinnerWrapper {...rest} style={style} />;
}
