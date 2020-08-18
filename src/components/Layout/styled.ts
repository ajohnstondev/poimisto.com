import styled, { css } from 'styled-components'
import { mediaQueries } from '@/assets/theme/media'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${mediaQueries.isTabletOrDesktop} {
  }
`

type MainContentProps = {
  center?: boolean
}

export const MainContent = styled.main<MainContentProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: 1225px;
  padding: 0 20px;
  flex: 1;
  ${props =>
    props.center
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ''}
`
