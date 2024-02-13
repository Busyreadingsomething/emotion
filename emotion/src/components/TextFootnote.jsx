/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react'

import MUITypography from '@mui/material/Typography';

import { THEME } from '../src/components/themes';
import * as styles from '../uib/js/dark/variables';
import { Box } from '@mui/material';

function getLangFont(type, lang) {
  if (type === 'sura') {
    if (lang === 'en') {
      return styles.fontFamilyCrimsonPro;
    } else if (lang === 'ar') {
      return styles.fontFamilyNotoSans;
    }
  }

  return styles.fontFamilyAmiri;
}

function TextFootnote({ children, lang, theme, content, ...props }) {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: styles.semanticSpaceAroundCompMd,
        alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
        alignSelf: 'stretch',
        gap: styles.semanticSpaceAroundCompSm,
        backgroundColor: THEME[theme].bg.subtle,
        borderRadius: styles.semanticBorderRadiusSm,
        border: `${styles.semanticBorderWidthDefault} solid ${THEME[theme].outline['on-surface']}`,
      }}
    >
      <MUITypography
        css={{
          color: THEME[theme].fg.default,
          fontFamily: getLangFont('sura', lang),
          fontSize: styles.size20,
          fontStyle: styles.fontWeightItalic,
          fontWeight: styles.fontWeightBold,
          lineHeight: styles.lineHeight140,
        }}
      >
        Footnote
      </MUITypography>
      <MUITypography
        css={{
          color: THEME[theme].fg.default,
          fontFamily: getLangFont('sura', lang),
          fontSize: styles.size20,
          fontStyle: styles.fontWeightItalic,
          fontWeight: styles.fontWeightRegular,
          lineHeight: styles.lineHeight140,
        }}
      >
        {content}
      </MUITypography>
    </Box>
  );
}

TextFootnote.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  lang: PropTypes.oneOf(['en', 'ar']),
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  ...MUITypography.propTypes
}

export default TextFootnote;
