import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';
import { CSSProperties } from 'react';

export const radioButtonStyles = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: styles.semanticSpaceBetweenCompMd
};

export function labelStyles(theme: Theme) {
  return ({
    color: theme.brandPalette.fg.base,
    fontFamily: styles.fontFamilyInter,
    fontSize: styles.fontSizeBase,
    fontStyle: 'normal',
    fontWeight: styles.fontWeightRegular,
    lineHeight: styles.lineHeight125,
    '&.Mui-disabled': {
      color: theme.brandPalette.fg.disabled
    }
  });
}

export function radioStyles(theme: Theme) {
  return ({
    width: styles.semanticSizeElementSm,
    height: styles.semanticSizeElementSm,
    color: theme.brandPalette.outline.lowEmphasis,
    marginRight: styles.semanticSpaceBetweenCompXs,
    '&.Mui-checked': {
      color: theme.brandPalette.accent.base
    },
    '&.Mui-disabled': {
      color: theme.brandPalette.bg.disabled
    },
    '&.Mui-checked.Mui-disabled': {
      color: theme.brandPalette.bg.disabled
    }
  });
}

export const radioIconStyles: CSSProperties = {
  height: styles.semanticSizeElementMd,
  width: styles.semanticSizeElementMd,
};
