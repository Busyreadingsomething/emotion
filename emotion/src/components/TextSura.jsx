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
      return styles.fontFamilyInter;
    } else if (lang === 'ar') {
      return styles.fontFamilyAmiri;
    }
  }

  return styles.fontFamilyAmiri;
}

function TextSura({ children, lang, theme, content, ...props }) {
  return (
    <MUITypography
      css={{
        display: 'flex',
        padding: styles.semanticSpaceAroundCompMd,
        justifyContent: 'flex-end',
        alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
        gap: styles.size10,
        color: THEME[theme].fg.default,
        fontFamily: getLangFont('sura', lang),
        textAlign: 'center',
        fontSize: styles.size32,
        fontStyles: 'normal',
        fontWeight: styles.fontWeightBold,
        lineHeight: styles.lineHeight120,
      }}
    >
      {content}
    </MUITypography>
  );
}

TextSura.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  lang: PropTypes.oneOf(['en', 'ar']),
  content: PropTypes.string.isRequired,
  ...MUITypography.propTypes
}

export default TextSura;
