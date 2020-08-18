import React from 'react'

import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
