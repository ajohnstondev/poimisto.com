import { createGlobalStyle, css } from 'styled-components'

const reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    outline: none;
  }
`

const typography = css`
  body {
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* font-family: 'Alegreya Sans SC', sans-serif; */
    color: ${props => props.theme.colors.headings};
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}
`

export default GlobalStyle
