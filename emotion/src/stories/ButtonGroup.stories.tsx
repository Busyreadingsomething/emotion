import { Meta, StoryObj } from '@storybook/react';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import IconButton from '../components/button/IconButton';
import { ButtonGroup } from '../components/button/ButtonGroup';
import { ButtonSizes, ButtonTypes } from '../components/button/styles';

type Story = StoryObj<typeof ButtonGroup>

const meta: Meta<typeof ButtonGroup> = {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
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

export const DefaultButtonGroup: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton
        variantType={ButtonTypes.GHOST}
        size={ButtonSizes.SMALL}
      >
        <ChatBubbleOutlineOutlinedIcon />
      </IconButton>
      <IconButton
        variantType={ButtonTypes.GHOST}
        size={ButtonSizes.SMALL}
      >
        <LanguageOutlinedIcon />
      </IconButton>
      <IconButton
        variantType={ButtonTypes.GHOST}
        size={ButtonSizes.SMALL}
      >
        <SearchOutlinedIcon />
      </IconButton>
      <IconButton
        variantType={ButtonTypes.GHOST}
        size={ButtonSizes.SMALL}
      >
        <BookmarkBorderOutlinedIcon />
      </IconButton>
    </ButtonGroup>
  ),
  args: {},
}
