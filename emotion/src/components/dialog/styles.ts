import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';

export function dialogStyles(theme: Theme) {
  return ({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    borderRadius: styles.size8,
    background: theme.brandPalette.bg.surface,
  });
}

export function dialogTitleStyles(theme: Theme) {
  return ({
    color: theme.brandPalette.fg.base,
    fontFamily: styles.fontFamilyInter,
    fontSize: styles.fontSizeLg,
    fontStyle: 'normal',
    fontWeight: styles.fontWeightBold,
    lineHeight: styles.lineHeight135,
  });
}

export function dialogContentStyles(theme: Theme) {
  return ({
    color: theme.brandPalette.fg.base,
    fontFamily: styles.fontFamilyInter,
    fontSize: styles.fontSizeMd,
    fontStyle: 'normal',
    fontWeight: styles.fontWeightRegular,
    lineHeight: styles.lineHeight150,
  });
}

export function dialogActionStyles(theme: Theme) {
  return ({
    display: 'flex',
    padding: styles.semanticSpaceAroundCompMd,
    justifyConent: 'center',
    alignItems: 'center',
    gap: styles.semanticSpaceBetweenCompMd,
    alignSelf: 'stretch',
    borderTop: `${styles.borderWidthSm} solid ${theme.brandPalette.outline.onSurface}`,
    background: theme.brandPalette.bg.surface,
  });
}