import React from 'react';

import { styled } from '@mui/material/styles';
import { useButton } from '@mui/base/useButton';
import { ButtonProps } from '@mui/material';

import {
  ButtonSizes,
  ButtonTypes,
  buildIconButtonTypeStyle,
  defaultIconButtonStyles,
  iconButtonSizeStyles,
} from './styles';

import clsx from 'clsx';

interface CustomIconButtonProps extends ButtonProps {
  size: ButtonSizes;
  variantType: ButtonTypes;
}
export const IconButton = React.forwardRef(function IconButton(
  props: CustomIconButtonProps,
  ref: React.ForwardedRef<any>,
) {
  const { size, variantType, disabled, ...rest } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...rest,
    rootRef: ref,
  });

  const ownerState = { size, variantType };

  return (
    <CustomIconButtonRoot
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
    </CustomIconButtonRoot>
  );
});

type CustomButtonState = Pick<CustomIconButtonProps, 'size' | 'variantType'>
const CustomIconButtonRoot = styled('button')<{ ownerState: CustomButtonState }>(
  ({ theme, ownerState }) => ({
    ...defaultIconButtonStyles,
    ...iconButtonSizeStyles[ownerState.size],
    ...buildIconButtonTypeStyle(theme, ownerState.variantType),
  }),
);

export default IconButton;
