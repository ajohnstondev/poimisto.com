import styled from 'styled-components'

import { container } from '@/assets/theme/helpers'
import { mediaQueries } from '@/assets/theme/media'
import { trackingInExpand } from '@/assets/theme/keyframes'

export const Hero = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  font-size: 200%;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.hero};
  ${mediaQueries.isTabletOrDesktop} {
    font-size: 350%;
  }
`
