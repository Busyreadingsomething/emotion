import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';
import { CSSProperties } from 'react';

/** Types of Button Styles */
export enum ButtonTypes {
  SOLID = 'solid',
  OUTLINE = 'outline',
  GHOST = 'ghost',
}

export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

// Disabled Styles
export function getDisabledStyles(theme: Theme) {
  return {
    '&.disabled': {
      backgroundColor: theme.brandPalette.bg.disabled,
      color: theme.brandPalette.fg.disabled,
      border: 'unset',
    }
  };
}

// BUTTON
export const defaultButtonStyles: CSSProperties = {
  fontFamily: styles.fontFamilyInter,
  fontWeight: styles.fontWeightBold,
  lineHeight: styles.lineHeightNone,
  letterSpacing: styles.letterSpacingNone,
  borderRadius: styles.semanticBorderRadiusSm,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  flexShrink: 0,
}

export const sizeStyles: { [key in ButtonSizes]: CSSProperties } = {
  [ButtonSizes.SMALL]: {
    fontSize: styles.fontSizeSm,
    height: styles.semanticSizeCompSm,
    padding: styles.semanticSpaceAroundCompSm,
    gap: styles.semanticSpaceBetweenCompXs,
  },
  [ButtonSizes.MEDIUM]: {
    fontSize: styles.fontSizeMd,
    height: styles.semanticSizeCompMd,
    padding: styles.semanticSpaceAroundCompMd,
    gap: styles.semanticSpaceBetweenCompSm,
  },
  [ButtonSizes.LARGE]: {
    fontSize: styles.fontSizeLg,
    height: styles.semanticSizeCompLg,
    padding: styles.semanticSpaceAroundCompXl,
    gap: styles.semanticSpaceBetweenCompSm,
  },
};

export function buildTypeStyle(theme: Theme, type: ButtonTypes) {
  const palette = theme.brandPalette;
  switch (type) {
    case ButtonTypes.OUTLINE:
      return {
        backgroundColor: palette.bg.hollow,
        color: palette.accent.base,
        border: `${styles.borderWidthMd} solid ${palette.accent.base}`,
        '&:hover': {
          color: palette.accent.lowEmphasis,
          border: `${styles.borderWidthMd} solid ${palette.accent.lowEmphasis}`,
        },
        '&.active': {
          backgroundColor: palette.accent.subtle,
          color: palette.accent.highEmphasis,
          borderColor: palette.accent.highEmphasis,
        }
      }
    case ButtonTypes.GHOST:
      return {
        backgroundColor: palette.bg.hollow,
        color: palette.fg.base,
        border: 'none',
        '&:hover': {
          backgroundColor: palette.bg.subtle,
        },
        '&.active': {
          backgroundColor: palette.bg.subtle,
          border: `${styles.borderWidthMd} solid ${palette.outline.onSurface}`,
        }
      }
    case ButtonTypes.SOLID:
    default:
      return {
        backgroundColor: palette.accent.base,
        color: palette.fg.inverse,
        border: 'none',
        '&:hover': {
          backgroundColor: palette.accent.lowEmphasis,
        },
        '&.active': {
          backgroundColor: palette.accent.highEmphasis,
        }
      }
  };
};

// ICON BUTTON
export const defaultIconButtonStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: styles.semanticBorderRadiusSm,
};

export const iconButtonSizeStyles: { [key in ButtonSizes]: CSSProperties } = {
  [ButtonSizes.SMALL]: {
    height: styles.semanticSizeCompSm,
    padding: styles.semanticSpaceAroundCompSm,
  },
  [ButtonSizes.MEDIUM]: {
    height: styles.semanticSizeCompMd,
    padding: styles.semanticSpaceAroundCompMd,
  },
  [ButtonSizes.LARGE]: {
    height: styles.semanticSizeCompLg,
    padding: styles.semanticSpaceAroundCompXl,
  },
};

export function buildIconButtonTypeStyle(theme: Theme, type: ButtonTypes) {
  const palette = theme.brandPalette;
  switch (type) {
    case ButtonTypes.OUTLINE:
      return {
        backgroundColor: palette.bg.hollow,
        border: `${styles.borderWidthMd} solid ${palette.accent.base}`,
        color: theme.brandPalette.accent.base,
        '&:hover': {
          color: palette.accent.lowEmphasis,
          border: `${styles.borderWidthMd} solid ${palette.accent.lowEmphasis}`,
        },
        '&.active': {
          backgroundColor: palette.accent.subtle,
          color: palette.accent.highEmphasis,
          borderColor: palette.accent.highEmphasis,
        }
      }
    case ButtonTypes.GHOST:
      return {
        backgroundColor: palette.bg.hollow,
        border: 'none',
        color: theme.brandPalette.fg.base,
        '&:hover': {
          backgroundColor: palette.bg.subtle,
        },
        '&.active': {
          backgroundColor: palette.bg.subtle,
          border: `${styles.borderWidthMd} solid ${palette.outline.onSurface}`,
        }
      }
    case ButtonTypes.SOLID:
    default:
      return {
        backgroundColor: palette.accent.base,
        border: 'none',
        color: theme.brandPalette.fg.base,
        '&:hover': {
          backgroundColor: palette.accent.lowEmphasis,
        },
        '&.active': {
          backgroundColor: palette.accent.highEmphasis,
        }
      }
  };
};
