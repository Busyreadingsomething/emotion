import React from 'react';

import { radioIconStyles } from './styles';

interface RadioCheckProps {
  outerColor: string;
  innerColor: string;
}
export function RadioCheckIcon({ outerColor, innerColor, ...rest }: RadioCheckProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={radioIconStyles}
      viewBox={`0 0 ${radioIconStyles.width} ${radioIconStyles.height}`}
      // preserveAspectRatio="xMidYMid meet"
      {...rest}
  >
    <circle cx="50%" cy="50%" r="4" fill={outerColor} />
    <circle cx="50%" cy="50%" r="0.5" fill={innerColor} />
  </svg>
  )
}