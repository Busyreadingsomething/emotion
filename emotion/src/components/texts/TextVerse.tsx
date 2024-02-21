import React from 'react';

import MUITypography from '@mui/material/Typography';
import { styled } from '@mui/material';

import { textVerseStyles } from './styles';

interface TextVerseProps {
  content: string;
  lang?: string;
}
export function TextVerse({ content, lang = 'en' }: TextVerseProps) {
  return (
    <StyledText lang={lang}>
      {content}
    </StyledText>
  );
}

const StyledText = styled(MUITypography)<{ lang: string }>(
  ({ theme, lang }) => textVerseStyles(theme, lang)
);