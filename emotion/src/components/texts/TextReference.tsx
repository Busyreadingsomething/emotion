import React from 'react';

import MUITypography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import { textReferenceContainerStyles, textReferenceStyles } from './styles';

interface TextReferenceProps {
  content: string[];
  lang?: string;
}
export function TextReference({ content, lang = 'en' }: TextReferenceProps) {
  return (
    <StyledContainer lang={lang}>
      {
        content.map((item) => (
          <StyledText key={item} lang={lang}>
            {item}
          </StyledText>
        ))
      }
    </StyledContainer>
  );
}

const StyledContainer = styled(Box)<{ lang: string }>(
  ({ theme, lang }) => textReferenceContainerStyles(theme, lang),
);

const StyledText = styled(MUITypography)<{ lang: string }>(
  ({ theme, lang }) => ({
    ...textReferenceStyles(theme, lang),
    textAlign: 'center',
  })
);
