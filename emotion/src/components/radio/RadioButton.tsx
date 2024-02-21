import React from 'react';
import { styled } from '@mui/material';
import MuiRadio from '@mui/material/Radio';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

import { RadioCheckIcon } from './RadioCheck';
import { labelStyles, radioStyles } from './styles';

interface RadioProps extends Omit<FormControlLabelProps, 'label' | 'control'> {
  label?: string;
  value: string;
  disabled?: boolean;
}
export function Radio(props: RadioProps) {
  const { value, disabled, label, ...rest } = props;
  if (label === undefined) {
    return <RadioButton
      value={value}
      disabled={disabled}
      // checkedIcon={<RadioCheckIcon outerColor={'#DC2626'} innerColor='#FAFAFA' />}
    />
  }
  return (
    <Label
      {...rest}
      value={value}
      label={label}
      disabled={disabled}
      control={
        <RadioButton
          disabled={disabled}
          // checkedIcon={
          //   <RadioCheckIcon outerColor={'#DC2626'} innerColor='#FAFAFA' />
          // }
        />
      }
    />
  );
}

const RadioButton = styled(MuiRadio)(
  ({ theme }) => radioStyles(theme)
);

const Label = styled(FormControlLabel)(
  ({ theme }) => labelStyles(theme),
);
