import { Meta, StoryObj } from '@storybook/react';

import { ListNavigationItem } from '../components/listNavigation/ListNavigationItem';

type Story = StoryObj<typeof ListNavigationItem>;

const meta: Meta<typeof ListNavigationItem> = {
  title: 'Example/ListNavigationItem',
  component: ListNavigationItem,
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

export const NavItem: Story = {
  args: {
    active: false,
    label: 'Submitters Perspectives',
  }
};

export const ActiveNavItem: Story = {
  args: {
    active: true,
    label: 'Appendices',
  }
};
