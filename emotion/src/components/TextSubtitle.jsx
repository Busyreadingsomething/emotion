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

function TextSubtitle({ children, lang, theme, content, ...props }) {
  return (
    <MUITypography
      css={{
        display: 'flex',
        padding: styles.semanticSpaceAroundCompMd,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: THEME[theme].fg.default,
        fontFamily: getLangFont('sura', lang),
        fontSize: styles.size22,
        fontStyle: styles.fontWeightItalic,
        fontWeight: styles.fontWeightRegular,
        lineHeight: styles.lineHeight125,
      }}
    >
      {content}
    </MUITypography>
  );
}

TextSubtitle.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  lang: PropTypes.oneOf(['en', 'ar']),
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  ...MUITypography.propTypes
}

export default TextSubtitle;
