import React from 'react'
import Link from 'gatsby-link'
import { useSprings, animated } from 'react-spring'

import * as S from './styled'

type Props = {
  navigation: import('generated/graphql').NavigationQuery['site']['siteMetadata']['mainNavigation']
  style: any
  close: () => void
}

const MobileNav: React.FC<Props> = ({ navigation, style, close }) => {
  const animateNavItem = useSprings(
    navigation.length,
    navigation.map((_, index) => ({
      opacity: 1,
      from: {
        opacity: 0,
      },
      delay: 300 - index * 40,
    }))
  )

  return (
    <S.AnimatedMobileNav style={style}>
      <S.MobileNavWrapper>
        <S.MobileNav>
          {navigation.map((item, index) => (
            <animated.div style={animateNavItem[index]} key={index}>
              <S.MobileNavItem key={item.id} onClick={close}>
                <Link to={item.link}>{item.title}</Link>
              </S.MobileNavItem>
            </animated.div>
          ))}
        </S.MobileNav>
      </S.MobileNavWrapper>
    </S.AnimatedMobileNav>
  )
}

export default MobileNav
