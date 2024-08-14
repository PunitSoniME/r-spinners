import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RoundedSpinner, RoundedSpinnerProps } from '../..';
import Center from './Center';

const defaultProps = {
  animationDuration: 1,
  size: '45px',
  color: "#86198f",
  stop: false,
  style: {}
}

const defaultThickness = 8;

const meta: Meta = {
  title: 'Rounded Spinner',
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      type: {
        name: 'string',
        required: true,
      },
    },
    size: {
      type: 'string',
      table: {
        defaultValue: {
          summary: defaultProps.size,
        },
        type: {
          summary: "string",
        },
      },
      description: 'Use same size which are available for `font-size` like `px`, `rem`, `em`, `%` etc...'
    },
    animationDuration: {
      table: {
        defaultValue: {
          summary: `${defaultProps.animationDuration} second`,
        }
      },
      description: 'Enter the duration to complete 1 animation cycle',
    }
  }
};

export default meta;

const Template: StoryFn<RoundedSpinnerProps> = (args) => <RoundedSpinner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Variant1 = Template.bind({});

Variant1.args = {
  variant: 'variant1',
  thickness: defaultThickness,
  ...defaultProps
};

export const Variant2 = Template.bind({});

Variant2.args = {
  variant: 'variant2',
  secondaryColor: "#cbd5e1",
  thickness: defaultThickness,
  ...defaultProps
};

export const Variant3 = Template.bind({});

Variant3.args = {
  variant: 'variant3',
  thickness: defaultThickness,
  ...defaultProps
};

export const Variant4 = Template.bind({});

Variant4.args = {
  variant: 'variant4',
  thickness: defaultThickness,
  ...defaultProps
};

export const Variant5 = Template.bind({});

Variant5.args = {
  variant: 'variant5',
  thickness: defaultThickness,
  ...defaultProps
};

export const Variant6 = Template.bind({});

Variant6.args = {
  variant: 'variant6',
  dotColor: defaultProps.color,
  ...defaultProps
};

export const Variant7 = Template.bind({});

Variant7.args = {
  variant: 'variant7',
  ...defaultProps
};

export const Variant8 = Template.bind({});

Variant8.args = {
  variant: 'variant8',
  ...defaultProps,
};

export const Variant9 = Template.bind({});

Variant9.args = {
  variant: 'variant9',
  dotColor: defaultProps.color,
  ...defaultProps,
  color: "#ccc"
};

export const Variant10 = Template.bind({});

Variant10.args = {
  variant: 'variant10',
  ...defaultProps,
};
