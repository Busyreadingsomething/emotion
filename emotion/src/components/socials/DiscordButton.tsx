import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import { useButton } from '@mui/base/useButton';
import { DiscordIcon } from './DiscordIcon';
import { discordButtonStyles } from './styles';

export const DiscordButton = React.forwardRef(function DiscordButton(
  props: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  const { getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });
  return (
    <DiscordButtonRoot
      {...getRootProps()}
    >
      <DiscordIcon/>
      <span>Continue With Discord</span>
    </DiscordButtonRoot>
  );
});

const DiscordButtonRoot = styled(Button)(() => ({
  ...discordButtonStyles,
}));
