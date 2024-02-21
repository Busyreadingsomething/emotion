import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';
import { CSSProperties } from 'react';

export const discordButtonStyles: CSSProperties = {
  display: 'flex',
  height: styles.semanticSizeCompMd,
  width: styles.size240,
  padding: `0 ${styles.semanticSpaceAroundCompSm} 0 ${styles.semanticSpaceAroundCompSm}`,
  alignItems: 'center',
  gap: styles.semanticSpaceBetweenCompSm,
  borderRadius: styles.semanticBorderRadiusSm,
  background: styles.colorBrandColorDiscord,
  color: styles.colorWhite,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontFamily: styles.fontFamilyInter,
  fontSize: styles.size16,
  fontStyle: 'normal',
  fontWeight: styles.fontWeightBold,
  lineHeight: '100%',
};

export const discordIconStyles: CSSProperties = {
  height: styles.semanticSizeElementMd,
  width: styles.semanticSizeElementMd,
};
