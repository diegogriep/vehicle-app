import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: antialised;

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5%
  }

  body {
    font-size: 1.6rem;
  }
`

export default GlobalStyles
