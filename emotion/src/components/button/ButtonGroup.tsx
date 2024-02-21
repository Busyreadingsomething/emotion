import React from 'react';
import MuiButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';
import { styled } from '@mui/material';

import * as styles from '../../styles/js/light/variables';

export function ButtonGroup(props: ButtonGroupProps) {
  const { color, ...rest } = props;
  return (
    <StyledButtonGroupBase
      {...rest}
    >
      {props.children}
    </StyledButtonGroupBase>
  );
}

export const StyledButtonGroupBase = styled(MuiButtonGroup)(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: styles.semanticSpaceBetweenCompSm,
  background: theme.brandPalette.bg.hollow,
  color: theme.brandPalette.fg.base,
}));
