import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'
import { bounceInFwd, textFlickerInGlow } from '@/assets/theme/keyframes'

export const HeroWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
`

export const Hero = styled.h2`
  font-size: 200%;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.hero};

  em {
    color: #00cb26;
    font-style: normal;
    animation: ${textFlickerInGlow} 4s linear both;
    animation-delay: 0.25s;
  }

  ${mediaQueries.isTabletOrDesktop} {
    font-size: 350%;
  }

  animation: ${bounceInFwd} 1.1s both;
`
