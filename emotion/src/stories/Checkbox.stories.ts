import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../components/checkbox/Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Show Arabic'
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Settings'
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Settings'
  },
};

export const NoLabel: Story = {
  args: {},
};
