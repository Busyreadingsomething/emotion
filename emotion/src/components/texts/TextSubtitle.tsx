import React from 'react';

import MUITypography from '@mui/material/Typography';
import { styled } from '@mui/material';

import { textSubtitleStyles } from './styles';

interface TextSubtitleProps {
  content: string;
  lang?: string;
}
export function TextSubtitle({ content, lang = 'en' }: TextSubtitleProps) {
  return (
    <StyledSubtitle lang={lang}>
      {content}
    </StyledSubtitle>
  );
}

const StyledSubtitle = styled(MUITypography)<{ lang: string }>(
  ({ theme, lang }) => ({
    ...textSubtitleStyles(theme, lang),
    textAlign: 'center',
  })
);