import React from 'react';
import MuiAccordionSummary, { AccordionSummaryOwnProps } from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material';
import { defaultAccordionSummaryStyles, defaultHeaderCountStyles, defaultIconButtonStyles } from './styles';

const StyledAccordionSummary = styled(MuiAccordionSummary)(
  ({ theme }) => defaultAccordionSummaryStyles(theme),
);

interface CounterProps {
  counter?: number;
}
function Counter({ counter }: CounterProps) {
  return (<span>({counter})</span>);
}
const StyledCounter = styled(Counter)(
  ({ theme }) => defaultHeaderCountStyles(theme),
);

const ExpandIcon = styled(ExpandMoreIcon)(() => defaultIconButtonStyles);

interface AccordionSummaryProps extends AccordionSummaryOwnProps {
  counter?: number
}
export function AccordionSummary(props: AccordionSummaryProps) {
  const { counter, ...rest} = props
  return (
    <StyledAccordionSummary
      {...rest}
      expandIcon={props.expandIcon ?? <ExpandIcon />}
    >
      <span>{rest.children}</span>
      <StyledCounter counter={counter} />
    </StyledAccordionSummary>
  )
}
