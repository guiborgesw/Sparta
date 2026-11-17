import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  html,
  body,
  #root {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }
`
