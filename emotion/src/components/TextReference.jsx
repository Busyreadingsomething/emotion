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

function TextReference({ children, lang, theme, content, ...props }) {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: styles.semanticSpaceAroundCompMd,
        justifyContent: 'flex-end',
        alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
        gap: styles.semanticSpaceAroundCompSm,
        border: `${styles.semanticBorderWidthThick} solid ${THEME[theme].outline['high-emphasis']}`,
      }}
    >
      {
        content.map((item) => (
          <MUITypography
            key={item}
            css={{
              color: THEME[theme].fg.default,
              fontFamily: getLangFont('sura', lang),
              textAlign: 'center',
              fontSize: styles.size32,
              fontStyle: styles.fontWeightItalic,
              fontWeight: styles.fontWeightRegular,
              lineHeight: styles.lineHeight120,
            }}
          >
            {item}
          </MUITypography>
        ))
      }
    </Box>
  );
}

TextReference.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  lang: PropTypes.oneOf(['en', 'ar']),
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  ...MUITypography.propTypes
}

export default TextReference;
