import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { InfinitySpinner, InfinitySpinnerProps } from '../../';
import Center from './Center';

const defaultProps = {
  animationDuration: 1,
  height: '14px',
  width: '90px',
  color: "#0369a1",
  stop: false,
  style: {}
}

const meta: Meta = {
  title: 'Infinity Spinner',
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
    height: {
      type: 'string',
      table: {
        defaultValue: {
          summary: defaultProps.height,
        },
        type: {
          summary: "string",
        },
      },
      description: 'Use same size which are available for `height` like `px`, `rem`, `em`, `%` etc...'
    },
    width: {
      type: 'string',
      table: {
        defaultValue: {
          summary: defaultProps.width,
        },
        type: {
          summary: "string",
        },
      },
      description: 'Use same size which are available for `width` like `px`, `rem`, `em`, `%` etc...'
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

const Template: StoryFn<InfinitySpinnerProps> = (args) => <InfinitySpinner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Variant1 = Template.bind({});

Variant1.args = {
  variant: 'variant1',
  ...defaultProps
};

export const Variant2 = Template.bind({});

Variant2.args = {
  variant: 'variant2',
  ...defaultProps
};

export const Variant3 = Template.bind({});

Variant3.args = {
  variant: 'variant3',
  ...defaultProps
};

export const Variant4 = Template.bind({});

Variant4.args = {
  variant: 'variant4',
  ...defaultProps
};

export const Variant5 = Template.bind({});

Variant5.args = {
  variant: 'variant5',
  ...defaultProps
};

export const Variant6 = Template.bind({});

Variant6.args = {
  variant: 'variant6',
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
  ...defaultProps,
};

export const Variant10 = Template.bind({});

Variant10.args = {
  variant: 'variant10',
  ...defaultProps,
};
