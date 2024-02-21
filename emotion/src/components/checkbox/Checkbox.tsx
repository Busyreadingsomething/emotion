import React from 'react';

import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material';
import { checkboxLabelStyles, checkboxStyles, defaultStyles, getDisabledStyles } from './styles';

interface CustomCheckboxProps extends CheckboxProps {
  label?: string
}
export function Checkbox(props: CustomCheckboxProps) {
  const { label, ...rest } = props;
  const ownerState = {
    selected: props.checked || props.indeterminate,
    disabled: props.disabled,
  };
  return (
    <CheckboxContainer>
      <StyledCheckbox
        {...rest}
        disabled={props.disabled}
        ownerState={ownerState}
      />
      {label && (
        <Label
          disabled={props.disabled}
        >{label}</Label>
      )}
    </CheckboxContainer>
  );
}

type CustomCheckboxState = {
  selected?: boolean,
  disabled?: boolean
}
const StyledCheckbox = styled(MuiCheckbox)<{ ownerState: CustomCheckboxState }>(
  ({ theme, ownerState }) => ({
    ...checkboxStyles(
      theme,
      ownerState.selected,
      ownerState.disabled
    ),
    ...getDisabledStyles(theme),
  }),
);

const CheckboxContainer = styled('div')(defaultStyles);

const Label = styled('div')<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    ...checkboxLabelStyles(theme, disabled),
    ...getDisabledStyles(theme),
  }),
);
