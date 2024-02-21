import React from 'react';

import MUITypography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import { textFootnoteContainerStyles, textFootnoteStyles } from './styles';

interface TextFootnoteProps {
  content: string;
  lang?: string;
}
export function TextFootnote({ content, lang = 'en' }: TextFootnoteProps) {
  return (
    <StyledContainer
      lang={lang}
    >
      <StyledText lang={lang}>
        Footnote
      </StyledText>
      <StyledText lang={lang}>
        {content}
      </StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled(Box)<{ lang: string }>(
  ({ theme, lang }) => textFootnoteContainerStyles(theme, lang),
);

const StyledText = styled(MUITypography)<{ lang: string }>(
  ({ theme, lang }) => textFootnoteStyles(theme, lang)
);
