import { Meta, StoryObj } from '@storybook/react';

import Alert, { AlertType } from '../components/alerts/Alert';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
}

export default meta;

export const Success: Story = {
  args: {
    type: AlertType.SUCCESS,
    children: ['Looks good! Things have been added.'],
  }
}

export const Error: Story = {
  args: {
    type: AlertType.ERROR,
    children: ['Whoops! We weren\'t able to add anything.'],
  }
}