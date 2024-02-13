/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@emotion/react'
import styled, { css } from '@emotion/styled'

import MButton from '@mui/material/Button';

import { buildStyle, getActiveColor } from '../src/components/button/buttonStyle';

const Button = React.forwardRef(function Button({
  size,
  type,
  label,
  onClick,
  disabled = false,
  active = false,
}) {
  const theme = useTheme();

  return (
    <MButton
      disabled={disabled}
      css={{
        ...buildStyle(type, size, theme),
        ...getActiveColor(theme, type, active, disabled),
      }}
      onClick={onClick}
    >
      {label}
    </MButton>
  );
});

Button.propTypes = {
  /**
   * Size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  /**
   * Variation of the button.
   */
  type: PropTypes.oneOf(['solid', 'outline', 'ghost']).isRequired,
  /**
   * Is the Button selected.
   */
  active: PropTypes.bool,
  /**
   * Is the Button disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Button content.
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler.
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  size: 'medium',
  type: 'solid',
  onClick: undefined,
};

export default Button;
