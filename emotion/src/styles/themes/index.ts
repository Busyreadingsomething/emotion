import { createTheme } from '@mui/material/styles'

import { fontFamilyAmiri, fontFamilyCrimsonPro, fontFamilyInter, fontFamilyMenlo, fontFamilyNotoSans } from '../js/light/variables';
import darkTokens from '../json/dark/nested.json';
import lightTokens from '../json/light/nested.json';

declare module '@mui/material/styles' {
  interface Theme {
    brandPalette: {
      fg: {
        base: string
        accent: string
        inverse: string
        muted: string
        subtle: string
        disabled: string
      }
      bg: {
        page: string
        surface: string
        subtle: string
        muted: string
        emphasis: string
        canvas: string
        overlay: string
        hollow: string
        disabled: string
      }
      accent: {
        base: string
        muted: string
        subtle: string
        lowEmphasis: string
        highEmphasis: string
      }
      warning: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onWarning: string
      }
      info: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onInfo: string
      }
      error: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onError: string
      }
      success: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onSuccess: string
      }
      outline: {
        onPage: string
        onSurface: string
        lowEmphasis: string
        highEmphasis: string
        inverse: string
        disabled: string
      }
      brand: {
        base: string
        low: string
        high: string
        subtle: string
        muted: string
      }
    }
  }

  interface ThemeOptions {
    brandPalette?: {
      fg?: {
        base: string
        accent: string
        inverse: string
        muted: string
        subtle: string
        disabled: string
      }
      bg?: {
        page: string
        surface: string
        subtle: string
        muted: string
        emphasis: string
        canvas: string
        overlay: string
        hollow: string
        disabled: string
      }
      accent?: {
        base: string
        muted: string
        subtle: string
        lowEmphasis: string
        highEmphasis: string
      }
      warning?: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onWarning: string
      }
      info?: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onInfo: string
      }
      error?: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onError: string
      }
      success?: {
        base: string
        muted: string
        subtle: string
        emphasis: string
        onSuccess: string
      }
      outline?: {
        onPage: string
        onSurface: string
        lowEmphasis: string
        highEmphasis: string
        inverse: string
        disabled: string
      }
      brand?: {
        base: string
        low: string
        high: string
        subtle: string
        muted: string
      }
    }
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const baseTheme = createTheme({
  typography: {
    fontFamily: [
      fontFamilyInter,
      fontFamilyCrimsonPro,
      fontFamilyMenlo,
      fontFamilyAmiri,
      fontFamilyNotoSans
    ].join(',')
  },
  spacing: 4,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    }
  }
})

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
  },
  brandPalette: {
    fg: darkTokens.theme.fg,
    bg: darkTokens.theme.bg,
    accent: darkTokens.theme.accent,
    info: darkTokens.theme.info,
    error: darkTokens.theme.error,
    success: darkTokens.theme.success,
    outline: darkTokens.theme.outline,
    brand: darkTokens.theme.brand,
  }
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
  },
  brandPalette: {
    fg: lightTokens.theme.fg,
    bg: lightTokens.theme.bg,
    accent: lightTokens.theme.accent,
    info: lightTokens.theme.info,
    error: lightTokens.theme.error,
    success: lightTokens.theme.success,
    outline: lightTokens.theme.outline,
    brand: lightTokens.theme.brand,
  }
});
