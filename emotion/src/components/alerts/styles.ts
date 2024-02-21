import { Theme } from '@mui/material';
import { CSSProperties } from 'react';

import * as styles from '../../styles/js/light/variables';

export const defaultAlertStyles = (theme: Theme): CSSProperties => ({
  display: 'flex',
  padding: `${styles.semanticSpaceAroundCompMd} ${styles.semanticSpaceAroundCompXl}`,
  borderRadius: styles.semanticBorderRadiusMd,
  background: theme.brandPalette.bg.surface,
  boxShadow: styles.shadowPrimary100
});

export const errorAlertStyles = (theme: Theme): CSSProperties => ({
  borderLeft: `${styles.borderWidthMd} solid ${theme.brandPalette.error.base}`,
})

export const successAlertStyles = (theme: Theme): CSSProperties => ({
  borderLeft: `${styles.borderWidthMd} solid ${theme.brandPalette.success.base}`,
})

export const defaultMessageStyles = (theme: Theme): CSSProperties => ({
  flex: '1 0 0',
  overflow: 'hidden',
  color: theme.brandPalette.fg.base,
  textOverflow: 'ellipsis',
  fontFamily: styles.fontFamilyInter,
  fontSize: styles.size18,
  fontStyle: 'normal',
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight135,
});

export const defaultIconStyles = (theme: Theme): CSSProperties => ({
  width: styles.semanticSizeElementMd,
  height: styles.semanticSizeElementMd,
});

export const errorIconStyles = (theme: Theme): CSSProperties => ({
  color: theme.brandPalette.error.base,
});

export const successIconStyles = (theme: Theme): CSSProperties => ({
  color: theme.brandPalette.success.base,
});
