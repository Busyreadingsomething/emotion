import React from 'react';

import { styled } from '@mui/material';
import MUITypography from '@mui/material/Typography';

import { textSuraStyles } from './styles';

interface TextSuraProps {
  content: string;
  lang?: string;
}
export function TextSura({ content, lang = 'en' }: TextSuraProps) {
  return (
    <StyledText lang={lang}>
      {content}
    </StyledText>
  );
}

const StyledText = styled(MUITypography)<{ lang: string }>(
  ({ theme, lang }) => ({
    ...textSuraStyles(theme, lang),
    textAlign: 'center',
  })
);