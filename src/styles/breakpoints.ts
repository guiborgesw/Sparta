import type { AppTheme } from './theme'

export type Breakpoint = keyof AppTheme['breakpoints']

export const down = (bp: Breakpoint) => (props: { theme: AppTheme }) =>
  `@media (max-width: ${props.theme.breakpoints[bp]})`

export const up = (bp: Breakpoint) => (props: { theme: AppTheme }) =>
  `@media (min-width: ${props.theme.breakpoints[bp]})`