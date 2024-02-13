/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react'

import MUITypography from '@mui/material/Typography';

import { THEME } from '../src/components/themes';
import * as styles from '../uib/js/dark/variables';

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

function TextVerse({ children, lang, theme, content, ...props }) {
  return (
    <MUITypography
      css={{
        display: 'flex',
        flex: '1 0 0',
        padding: styles.semanticSpaceAroundCompMd,
        justifyContent: 'flex-end',
        alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
        color: THEME[theme].fg.default,
        fontFamily: getLangFont('sura', lang),
        fontSize: styles.size22,
        fontWeight: styles.fontWeightRegular,
        lineHeight: styles.lineHeight140,
      }}
    >
      {content}
    </MUITypography>
  );
}

TextVerse.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  lang: PropTypes.oneOf(['en', 'ar']),
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  ...MUITypography.propTypes
}

export default TextVerse;
