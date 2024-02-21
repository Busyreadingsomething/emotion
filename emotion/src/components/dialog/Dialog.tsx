import React from 'react';

import { styled } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

import { dialogActionStyles, dialogContentStyles, dialogStyles, dialogTitleStyles } from './styles';

export const Dialog = styled(MuiDialog)(
  ({ theme }) => dialogStyles(theme),
);

export const DialogTitle = styled(MuiDialogTitle)(
  ({ theme }) => dialogTitleStyles(theme),
);

export const DialogContent = styled(MuiDialogContent)(
  ({ theme }) => dialogContentStyles(theme),
);

export const DialogActions = styled(MuiDialogActions)(
  ({ theme }) => dialogActionStyles(theme),
);
