import React from 'react';

import { Typography, styled } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { defaultListNavItemStyles, iconStyles, labelStyles } from './styles';

interface ListNavigationItemProps {
  active: boolean;
  onClick?: () => void;
  label: string;
}
export function ListNavigationItem(props: ListNavigationItemProps) {
  return (
    <StyledContainer
      active={props.active}
      onClick={props.onClick}
    >
      <StyledFormatttedIcon
        active={props.active}
      />
      <StyledLabel variant='h1'>{props.label}</StyledLabel>
    </StyledContainer>
  );
}

const StyledContainer = styled('div')<{ active: boolean }>(
  ({ theme, active }) => defaultListNavItemStyles(theme, active)
);
const StyledLabel = styled(Typography)(
  ({ theme }) => labelStyles(theme)
);
const StyledFormatttedIcon = styled(FormatListBulletedIcon)<{ active: boolean }>(
  ({ theme, active }) => iconStyles(theme, active),
);
