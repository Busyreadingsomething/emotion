import React from 'react';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import { useTheme } from '@mui/material';
import { defaultAccordionDetailsStyles } from './styles';

export function AccordionDetails(props: AccordionDetailsProps) {
  const theme = useTheme();
  return (
    <MuiAccordionDetails
      {...props}
      sx={defaultAccordionDetailsStyles(theme)}
    >
      {props.children}
    </MuiAccordionDetails>
  )
}