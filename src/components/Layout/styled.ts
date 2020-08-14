import styled from 'styled-components'
import { mediaQueries } from '@/assets/themes/media'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1225px;
  padding:0 20px;
  ${mediaQueries.isTabletOrDesktop} {
    
  }
`

export const MainContent = styled.main`
  flex: 1;
`