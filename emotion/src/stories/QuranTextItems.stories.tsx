import { Meta, StoryObj } from '@storybook/react';

import { List } from '@mui/material';

import { TextFootnote } from '../components/texts/TextFootnote';
import { TextReference } from '../components/texts/TextReference';
import { TextSubtitle } from '../components/texts/TextSubtitle';
import { TextSura } from '../components/texts/TextSura';
import { TextVerse } from '../components/texts/TextVerse';

type Story = StoryObj<typeof List>;

const meta: Meta<typeof List> = {
  title: 'Example/QuranTextItems',
  component: List,
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

const FOOTNOTE_CONTENT = '*1:1 The first verse in the Quran represents the foundation upon which a superhuman 19-based mathematical miracle is built. This important statement consists of 19 Arabic letters, and every word in it occurs in the whole Quran in multiples of 19 (see Appendices 1 & 29 for the details).';
export const Footnote: Story = {
  render: () => {
    return <List><TextFootnote content={FOOTNOTE_CONTENT} /></List>
  }
};

const REFERENCE_CONTENT = ['The only religion acceptable to God is Submission.', '[3:19]'];
export const Reference: Story = {
  render: () => {
    return <List><TextReference content={REFERENCE_CONTENT} /></List>
  }
};

const SUBTITLE_CONTENT = 'God\'s Messenger of the Covenant*';
export const Subtitle: Story = {
  render: () => {
    return <List><TextSubtitle content={SUBTITLE_CONTENT} /></List>
  },
};

const SURA_CONTENT = 'Sura 2: The Heifer (Al-Baqarah)';
export const Sura: Story = {
  render: () => {
    return <List><TextSura content={SURA_CONTENT} /></List>
  },
};

const VERSE_CONTENT = '[96:1] Read, in the name of your Lord, who created.*';
export const Verse: Story = {
  render: () => {
    return <List><TextVerse content={VERSE_CONTENT} /></List>
  },
};
