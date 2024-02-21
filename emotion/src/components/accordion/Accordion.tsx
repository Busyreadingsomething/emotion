import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material';
import { defaultAccordionStyles } from './styles';

export const Accordion = styled(MuiAccordion)(
  ({ theme }) => defaultAccordionStyles(theme),
);
