export const palette = {
  primary500: '#14375A',
  primary300: '#2A75C0',
  secondary500: '#4279A8',
  secondary300: '#23609E',
  secondary100: '#1B4C7C',
  details500: '#C8902A',
  details300: '#A58756',
  details100: '#54697A',
  gray900: '#3A4044',
  gray500: '#333333',
  gray300: '#504B44',
  gray100: '#C5C5C5',
  red500: '#F75A68',
  green500: '#87CC5F',
  white: '#FFFFFF',
  black: '#000000',
  page: '#EFEFEF',
}

export const theme = {
  colors: {
    brand: palette.primary500,
    brandLight: palette.primary300,
    info: palette.secondary500,
    infoDark: palette.secondary300,
    infoDeep: palette.secondary100,
    accent: palette.details500,
    accentSoft: palette.details300,
    accentMuted: palette.details100,
    heading: palette.gray900,
    text: palette.gray500,
    textSoft: palette.gray300,
    border: palette.gray100,
    success: palette.green500,
    danger: palette.red500,
    surface: palette.white,
    background: palette.page,
    white: palette.white,
    black: palette.black,
  },
  fonts: {
    body: "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif",
    // corrige o fallback: display serif não deve cair em sans-serif
    display: "'DM Serif Display', Georgia, serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.5rem',
    xxl: '2rem',
    hero: '2.5rem',
  },
  fontWeights: { regular: 400, medium: 500, bold: 700, black: 800 },
  lineHeights: { tight: 1.15, normal: 1.6 },
  space: { 1: '0.25rem', 2: '0.5rem', 3: '1rem', 4: '1.5rem', 5: '2rem', 6: '2.5rem' },
  radii: { sm: '0.5rem', md: '0.7rem', lg: '0.8rem', xl: '1rem', pill: '999px', round: '50%' },
  shadows: {
    card: '0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(20, 55, 90, 0.08)',
    raised: '0 8px 15px rgba(0, 0, 0, 0.25)',
  },
  breakpoints: { sm: '600px', xl: '1759px' },
  zIndex: { nav: 10, toast: 100 },
}

export type AppTheme = typeof theme
export const defaultTheme: AppTheme = theme