import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';

function getLangFont(type: string, lang: string) {
  if (type === 'sura') {
    if (lang === 'en') {
      return styles.fontFamilyCrimsonPro;
    } else if (lang === 'ar') {
      return styles.fontFamilyNotoSans;
    }
  }
  return styles.fontFamilyAmiri;
}

// ===========
// FOOTNOTE
// ===========
export const textFootnoteContainerStyles = (theme: Theme, lang: string) => ({
  display: 'flex',
  flexFlow: 'column',
  padding: styles.semanticSpaceAroundCompMd,
  alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
  alignSelf: 'stretch',
  gap: styles.semanticSpaceAroundCompSm,
  backgroundColor: theme.brandPalette.bg.subtle,
  borderRadius: styles.semanticBorderRadiusSm,
  border: `${styles.semanticBorderWidthDefault} solid ${theme.brandPalette.outline.onSurface}`,
});

export const textFootnoteStyles = (theme: Theme, lang: string) => ({
  color: theme.brandPalette.fg.base,
  fontFamily: getLangFont('sura', lang),
  fontSize: styles.size20,
  fontStyle: styles.fontWeightItalic,
  fontWeight: styles.fontWeightBold,
  lineHeight: styles.lineHeight140,
});

// ===========
// REFERENCE
// ===========
export const textReferenceContainerStyles = (theme: Theme, lang: string) => ({
  display: 'flex',
  flexFlow: 'column',
  padding: styles.semanticSpaceAroundCompMd,
  justifyContent: 'flex-end',
  alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
  gap: styles.semanticSpaceAroundCompSm,
  border: `${styles.semanticBorderWidthThick} solid ${theme.brandPalette.outline.highEmphasis}`,
});

export const textReferenceStyles = (theme: Theme, lang: string) => ({
  color: theme.brandPalette.fg.base,
  fontFamily: getLangFont('sura', lang),
  fontSize: styles.size32,
  fontStyle: styles.fontWeightItalic,
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight120,
});

// ===========
// SUBTITLE
// ===========
export const textSubtitleStyles = (theme: Theme, lang: string) => ({
  display: 'flex',
  padding: styles.semanticSpaceAroundCompMd,
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.brandPalette.fg.base,
  fontFamily: getLangFont('sura', lang),
  fontSize: styles.size22,
  fontStyle: styles.fontWeightItalic,
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight125,
});

// ===========
// SURA
// ===========
export const textSuraStyles = (theme: Theme, lang: string) => ({
  display: 'flex',
  padding: styles.semanticSpaceAroundCompMd,
  justifyContent: 'flex-end',
  alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
  gap: styles.size10,
  color: theme.brandPalette.fg.base,
  fontFamily: getLangFont('sura', lang),
  fontSize: styles.size32,
  fontStyles: 'normal',
  fontWeight: styles.fontWeightBold,
  lineHeight: styles.lineHeight120,
});

// ===========
// Verse
// ===========
export const textVerseStyles = (theme: Theme, lang: string) => ({
  display: 'flex',
  flex: '1 0 0',
  padding: styles.semanticSpaceAroundCompMd,
  justifyContent: 'flex-end',
  alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
  color: theme.brandPalette.fg.base,
  fontFamily: getLangFont('sura', lang),
  fontSize: styles.size22,
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight140,
});
