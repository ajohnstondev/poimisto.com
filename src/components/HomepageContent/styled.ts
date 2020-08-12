import styled from 'styled-components'

import { container } from '@/assets/themes/helpers'
import { mediaQueries } from '@/assets/themes/media'
import { trackingInExpand } from '@/assets/themes/keyframes'

export const HomepageContent = styled.div`
  ${container}
  padding-left: 10px;
  padding-right: 10px;

  ${mediaQueries.isTabletOrDesktop} {
    display: flex;
    > *:first-child {
      flex: 60%;
      padding-right: 10%;
    }

    > *:last-child {
      flex: 40%;
    }
  }
`

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  em {
    font-family: inherit;
  }
`
