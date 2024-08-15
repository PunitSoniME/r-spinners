import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InfinitySpinner, InfinitySpinnerProps } from '../../';
import {
  variant10DefaultValues, variant1DefaultValues, variant2DefaultValues, variant3DefaultValues,
  variant4DefaultValues, variant5DefaultValues, variant6DefaultValues, variant7DefaultValues,
  variant8DefaultValues, variant9DefaultValues
} from '../../src/Spinners/Infinity/variants';
import { generateArgTypes } from './stories.util';

const defaultProps = {
  stop: false,
  style: {}
}

const meta: Meta = {
  title: 'Infinity Spinner',
  decorators: [
    (Story) => <Story />,
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<InfinitySpinnerProps> = (args) => <InfinitySpinner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Variant1 = Template.bind({});

Variant1.args = {
  variant: 'variant1',
  ...variant1DefaultValues,
  ...defaultProps,
};
Variant1.argTypes = generateArgTypes(Variant1.args);

export const Variant2 = Template.bind({});

Variant2.args = {
  variant: 'variant2',
  ...variant2DefaultValues,
  ...defaultProps,
};
Variant2.argTypes = generateArgTypes(Variant2.args);

export const Variant3 = Template.bind({});

Variant3.args = {
  variant: 'variant3',
  ...variant3DefaultValues,
  ...defaultProps,
};
Variant3.argTypes = generateArgTypes(Variant3.args);

export const Variant4 = Template.bind({});

Variant4.args = {
  variant: 'variant4',
  ...variant4DefaultValues,
  ...defaultProps,
};
Variant4.argTypes = generateArgTypes(Variant4.args);

export const Variant5 = Template.bind({});

Variant5.args = {
  variant: 'variant5',
  ...variant5DefaultValues,
  ...defaultProps,
};
Variant5.argTypes = generateArgTypes(Variant5.args);

export const Variant6 = Template.bind({});

Variant6.args = {
  variant: 'variant6',
  ...variant6DefaultValues,
  ...defaultProps,
};
Variant6.argTypes = generateArgTypes(Variant6.args);

export const Variant7 = Template.bind({});

Variant7.args = {
  variant: 'variant7',
  ...variant7DefaultValues,
  ...defaultProps,
};
Variant7.argTypes = generateArgTypes(Variant7.args);

export const Variant8 = Template.bind({});

Variant8.args = {
  variant: 'variant8',
  ...variant8DefaultValues,
  ...defaultProps,
};
Variant8.argTypes = generateArgTypes(Variant8.args);

export const Variant9 = Template.bind({});

Variant9.args = {
  variant: 'variant9',
  ...variant9DefaultValues,
  ...defaultProps,
};
Variant9.argTypes = generateArgTypes(Variant9.args);

export const Variant10 = Template.bind({});

Variant10.args = {
  variant: 'variant10',
  ...variant10DefaultValues,
  ...defaultProps,
};
Variant10.argTypes = generateArgTypes(Variant10.args);
