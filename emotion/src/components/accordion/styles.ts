import { Theme } from '@mui/material/styles';

import * as styles from '../../styles/js/light/variables';
import { CSSProperties } from 'react';

export const defaultAccordionStyles = (theme: Theme) => ({
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
  padding: styles.semanticSpaceAroundCompSm,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexShrink: 0,
  borderBottom: `${styles.size1} solid ${theme.brandPalette.outline.onPage}`,
  background: theme.brandPalette.bg.page,
  '&:hover': {
    background: theme.brandPalette.bg.subtle,
  }
});

export const defaultAccordionSummaryStyles = (theme: Theme) => ({
  overflow: 'hidden',
  color: theme.brandPalette.fg.base,
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  width: '100%',
  fontFamily: styles.fontFamilyInter,
  fontSize: styles.size16,
  fontWeight: styles.fontWeightBold,
  lineHeight: styles.lineHeight150,
  height: 'unset',
});

export const defaultHeaderCountStyles = (theme: Theme) => ({
  color: theme.brandPalette.fg.subtle,
  fontFamily: styles.fontFamilyInter,
  fontStyle: 'normal',
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight150,
  marginLeft: styles.size6
});

export const defaultIconButtonStyles = {
  width: styles.semanticSizeElementMd,
  height: styles.semanticSizeElementMd,
};

export const defaultAccordionDetailsStyles = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
