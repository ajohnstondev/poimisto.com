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
      delay: 220 - index * 25,
    }))
  )

  return (
    <animated.div
      style={{
        ...style,
        zIndex: 9999,
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
      }}
    >
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
    </animated.div>
  )
}

export default MobileNav
