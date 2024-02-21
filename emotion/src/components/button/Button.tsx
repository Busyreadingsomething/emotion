import React from 'react';
import clsx from 'clsx';

import { styled } from '@mui/material/styles';
import { useButton } from '@mui/base/useButton';
import { ButtonProps } from '@mui/base/Button';

import {
  ButtonSizes,
  ButtonTypes,
  buildTypeStyle,
  defaultButtonStyles,
  getDisabledStyles,
  sizeStyles,
} from './styles';

interface CustomButtonProps extends ButtonProps {
  size: ButtonSizes;
  variantType: ButtonTypes;
  disabled: boolean;
}
const Button = React.forwardRef(function Button(
  props: CustomButtonProps,
  ref: React.ForwardedRef<any>,
) {
  const { size, variantType, disabled, ...rest } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...rest,
    rootRef: ref,
  });

  const ownerState = {
    size,
    variantType,
  };

  return (
    <CustomButtonRoot
      {...getRootProps()}
      ownerState={ownerState}
      onClick={props.onClick}
      className={clsx({
        active,
        disabled,
        focusVisible,
      })}
    >
      {props.children}
    </CustomButtonRoot>
  );
});

type CustomButtonState = Pick<CustomButtonProps, 'size' | 'variantType'>
const CustomButtonRoot = styled('button')<{ ownerState: CustomButtonState }>(
  ({ theme, ownerState }) => ({
    ...defaultButtonStyles,
    ...sizeStyles[ownerState.size],
    ...buildTypeStyle(theme, ownerState.variantType),
    ...getDisabledStyles(theme),
  }),
);

export default Button;
