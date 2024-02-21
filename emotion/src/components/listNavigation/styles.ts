import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';
import { CSSProperties } from 'react';

export const defaultListNavItemStyles = (theme: Theme, active = false) => ({
  display: 'flex',
  minWidth: styles.size224,
  padding: styles.semanticSpaceAroundCompMd,
  alignItems: 'center',
  gap: styles.semanticSpaceBetweenCompMd,
  borderRadius: styles.semanticBorderRadiusSm,
  background: active
    ? theme.brandPalette.bg.subtle
    : theme.brandPalette.bg.hollow,
  '&:hover': {
    background: theme.brandPalette.bg.subtle
  }
});

export const labelStyles = (theme: Theme) => ({
  flex: '1 0 0',
  overflow: 'hidden',
  color: theme.brandPalette.fg.base,
  textOverflow: 'ellipsis',
  fontFamily: styles.fontFamilyInter,
  fontSize: styles.fontSizeBase,
  fontStyle: 'normal',
  fontWeight: styles.fontWeightBold,
  lineHeight: styles.lineHeight150, 
});

export const iconStyles = (theme: Theme, active = false) => ({
  color: active ? theme.brandPalette.accent.base : theme.brandPalette.fg.base,
})