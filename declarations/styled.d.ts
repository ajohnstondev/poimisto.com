// import original module declarations
import 'styled-components'

import theme from '../src/assets/themes/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
