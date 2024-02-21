import { Theme } from '@mui/material/styles';
import * as styles from '../../styles/js/light/variables';

export function getDisabledStyles(theme: Theme) {
  return {
    '&.disabled': {
      background: theme.brandPalette.bg.disabled,
      color: theme.brandPalette.fg.disabled,
    }
  };
}

export const defaultStyles = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: styles.semanticSpaceBetweenCompMd,
};

export function checkboxLabelStyles(theme: Theme, disabled?: boolean) {
  return ({
    fontFamily: styles.fontFamilyInter,
    fontSize: styles.size16,
    fontStyle: 'normal',
    fontWeight: styles.fontWeightRegular,
    lineHeight: styles.lineHeight125,
    color: disabled
      ? theme.brandPalette.bg.disabled
      : theme.brandPalette.fg.base,
    
  });
}

export function checkboxStyles(
  theme: Theme,
  selected?: boolean,
  disabled?: boolean
) {
  return ({
    height: styles.semanticSizeElementSm,
    width: styles.semanticSizeElementSm,
    borderRadius: styles.semanticBorderRadiusSm,
    ...(disabled
      ? {
        background: selected
          ? theme.brandPalette.fg.disabled
          : theme.brandPalette.bg.hollow,
      }
      : {
        background: selected
          ? theme.brandPalette.bg.page
          : theme.brandPalette.bg.hollow,
        ...(selected ? {color: theme.brandPalette.accent.base} : {}),
        '&:hover, &:hover.Mui-checked, &:hover.MuiCheckbox-indeterminate': {
          color: theme.brandPalette.accent.lowEmphasis,
        },
        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          color: theme.brandPalette.accent.base,
        },
      }
    ),
  });
}
