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

const defaultColors = ['#000', '#b91c1c', '#0369a1', '#15803d'];

type WrapperProps = Props;

const ClassicSpinnerWrapper = styled.div.attrs<WrapperProps>(
  (props: WrapperProps) => ({
    text: props?.text,
    color: props?.color || props?.style?.color,
    fontSize: props?.size,
    animationDuration: props?.animationDuration,
    animationPlayState: props?.stop ? 'paused' : 'running',
    animationColor: props['animationColor'] || '',
    noOfCharactersToBlinkAtLast: props['noOfCharactersToBlinkAtLast'],
    colors:
      (props['colors'] && props['colors'].length === 4
        ? props['colors']
        : defaultColors) || defaultColors,
    style: props?.style,
  })
)`
  font-weight: bold;
  font-family: monospace;
  display: inline-block;

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
        | 'variant7'
        | 'variant8';
    }
  | {
      variant: 'variant6';
      animationColor: string;
    }
  | {
      variant: 'variant5';
      noOfCharactersToBlinkAtLast: number;
    }
  | {
      variant: 'variant9' | 'variant10';
      colors: string[];
    };

export type Props = CommonProps &
  ConditionalProps & {
    text: string;
    size: number | string;
  };

export default function ClassicSpinner(props: Props) {
  const { style, rest } = updateProps('Classic', props);

  return <ClassicSpinnerWrapper {...rest} style={style} />;
}
