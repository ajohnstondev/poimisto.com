import styled from 'styled-components'

import { container } from '@/assets/themes/helpers'
import { mediaQueries } from '@/assets/themes/media'
import { trackingInExpand } from '@/assets/themes/keyframes'

export const Hero = styled.div`
  min-height:400px;
  display: flex;
  align-items:center;
  font-size:200%;
  font-weight:700;
  font-family:${props => props.theme.fonts.hero};
  ${mediaQueries.isTabletOrDesktop} {
    font-size:350%;
  }
`

