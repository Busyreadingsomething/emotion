import { Meta, StoryObj } from '@storybook/react';
import StarIcon from '@mui/icons-material/Star';

import IconButton from '../components/button/IconButton';
import { ButtonSizes, ButtonTypes } from '../components/button/styles';

type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  title: 'Example/IconButton',
  component: IconButton,
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
  render: () => {
    return (
      <IconButton
        size={ButtonSizes.SMALL}
        variantType={ButtonTypes.SOLID}
      >
        <StarIcon />
      </IconButton>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
      <IconButton
        size={ButtonSizes.SMALL}
        variantType={ButtonTypes.OUTLINE}
      >
        <StarIcon />
      </IconButton>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
      <IconButton
        size={ButtonSizes.SMALL}
        variantType={ButtonTypes.GHOST}
      >
        <StarIcon />
      </IconButton>
    );
  },
};
