import { Meta, StoryObj } from '@storybook/react';

import { Radio } from '../components/radio/RadioButton';
import { RadioGroup } from '@mui/material';

type Story = StoryObj<typeof Radio>;

const meta: Meta<typeof Radio> = {
  title: 'Example/Radio',
  component: Radio,
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

export const WithLabel: Story = {
  render: () => {
    return (
      <RadioGroup>
        <Radio
          label='Arabic'
          value='arabis'
        />
        <Radio
          label='English'
          value='english'
        />
      </RadioGroup>
    );
  },
};

export const NoLabel: Story = {
  render: () => {
    return (
      <RadioGroup>
        <Radio value='arabis' />
        <Radio value='english' />
      </RadioGroup>
    );
  }
};
