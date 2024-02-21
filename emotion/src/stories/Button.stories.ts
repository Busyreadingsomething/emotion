import { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';
import { ButtonSizes, ButtonTypes } from '../components/button/styles';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
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

export const Solid: Story = {
  args: {
    size: ButtonSizes.SMALL,
    variantType: ButtonTypes.SOLID,
    children: 'Button',
  }
};

export const Outline: Story = {
  args: {
    size: ButtonSizes.MEDIUM,
    variantType: ButtonTypes.OUTLINE,
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    size: ButtonSizes.LARGE,
    variantType: ButtonTypes.GHOST,
    children: 'Button',
  },
};
