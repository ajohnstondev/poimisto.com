import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { useTransition, config } from 'react-spring'
import throttle from 'lodash.throttle'

import PoimistoLogo from './PoimistoLogo'
import MobileNav from '@/components/MobileNav'
import * as S from './styled'

const Header = () => {
  const [shadow, setShadow] = useState<boolean>(
    !!globalThis.window && !!globalThis.window.scrollY
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )
  // TODO: Add throttle/debounce
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0) {
        setShadow(true)
      } else {
        setShadow(false)
      }
      console.log(window.scrollY)
    }, 300)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setShadow])

  const transitions = useTransition(mobileOpen, null, {
    from: {
      height: '83px',
      opacity: 0,
    },
    enter: { height: window.innerHeight, opacity: 1 },
    leave: { height: 0, opacity: 0 },
    config: config.slow,
  })

  const { mainNavigation } = data.site.siteMetadata

  return (
    <>
      <S.HeaderWrapper shadow={shadow}>
        <S.Header>
          <Link to="/" style={{ zIndex: 10000 }}>
            <PoimistoLogo
              width={120}
              height={80}
              variant={mobileOpen ? 'dark' : 'light'}
            />
          </Link>

          <S.Nav>
            {mainNavigation.map(navItem => (
              <S.NavItem key={navItem.id}>
                <Link to={navItem.link}>{navItem.title}</Link>
              </S.NavItem>
            ))}
          </S.Nav>
          <S.Menu
            color={mobileOpen ? '#fff' : '#000'}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
          {transitions.map(
            ({ item, key, props }: any) =>
              item && (
                <MobileNav
                  navigation={mainNavigation}
                  key={key}
                  style={props}
                />
              )
          )}
        </S.Header>
      </S.HeaderWrapper>
    </>
  )
}

const query = graphql`
  query Navigation {
    site {
      siteMetadata {
        mainNavigation {
          id
          title
          link
        }
      }
    }
  }
`

export default Header
