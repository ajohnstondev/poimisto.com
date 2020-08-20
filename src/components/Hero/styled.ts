import styled from 'styled-components'

import { mediaQueries } from '@/assets/theme/media'
import { bounceInFwd, textFlickerInGlow } from '@/assets/theme/keyframes'

export const HeroWrapper = styled.div`
  max-height: 400px;
  min-height:260px;
  height:60vh;
  display: flex;
  align-items: center;
  text-align:center;

`

export const Hero = styled.h2`
  font-size: 8vw;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.hero};

  em {
    /* color: #00cb26; */
    font-style: normal;
    /* animation: ${textFlickerInGlow} 4s linear both;
    animation-delay: 0.25s; */
  }

  ${mediaQueries.isTabletOrDesktop} {
    font-size: 350%
  }

  animation: ${bounceInFwd} 1.1s both;
`
