import React from 'react';
import MuiReportProblemIcon from "@mui/icons-material/ReportProblemOutlined";
import MuiTaskAltIcon from "@mui/icons-material/TaskAlt";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Theme, styled } from '@mui/material';
import { defaultAlertStyles, defaultIconStyles, errorAlertStyles, errorIconStyles, successAlertStyles, successIconStyles } from './styles';

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
}

const ReportProblemIcon = styled(MuiReportProblemIcon)(({ theme }) => ({
  ...defaultIconStyles(theme),
  ...errorIconStyles(theme),
}));

const SuccessIcon = styled(MuiTaskAltIcon)(({ theme }) => ({
  ...defaultIconStyles(theme),
  ...successIconStyles(theme),
}));

function getIcon(type: AlertType) {
  switch(type) {
    case AlertType.SUCCESS:
      return <SuccessIcon />
    case AlertType.ERROR:
      return <ReportProblemIcon />
    default:
      null;
  }
}

function getAlertTypeStyle(type: AlertType, theme: Theme) {
  switch(type) {
    case AlertType.SUCCESS:
      return successAlertStyles(theme);
    case AlertType.ERROR:
      return errorAlertStyles(theme);
    default:
      {};
  }
}

interface CustomAlertProps extends AlertProps {
  type: AlertType
}
const StyledAlert = styled(MuiAlert)<CustomAlertProps>(({ theme, type }) => ({
  ...defaultAlertStyles(theme),
  ...getAlertTypeStyle(type, theme),
}));
export default function Alert({ type, icon, ...rest}: CustomAlertProps) {
  return (
    <StyledAlert
      {...rest}
      type={type}
      icon={icon ?? getIcon(type)}
    >
      {rest.children}
    </StyledAlert>
  );
}
