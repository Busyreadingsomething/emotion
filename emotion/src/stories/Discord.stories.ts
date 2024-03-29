import { Meta, StoryObj } from '@storybook/react';
import { DiscordButton } from '../components/socials/DiscordButton';

type Story = StoryObj<typeof DiscordButton>;

const meta: Meta<typeof DiscordButton> = {
  title: 'Example/DiscordButton',
  component: DiscordButton,
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

export const Demo: Story = {
  args: {}
};
