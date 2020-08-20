import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'

export const ChooseTime = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;


  > * {
    margin:2px;
  }

  ${mediaQueries.isTabletOrDesktop} {
    > * {
  
    }
  }
`
