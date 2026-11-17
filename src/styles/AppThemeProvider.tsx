import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import { defaultTheme, type AppTheme } from './theme'

type Props = {
  children: ReactNode
  /** Permite injetar outro tema (ex.: dark) sem mudar os componentes. */
  theme?: AppTheme
}

export function AppThemeProvider({ children, theme = defaultTheme }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}