import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { useTransition, config } from 'react-spring'
import throttle from 'lodash.throttle'
import useMedia from 'use-media'

import { TABLET_VIEW } from '@/assets/theme/media'
import PoimistoLogo from '@/components/PoimistoLogo'
import MobileNav from '@/components/MobileNav'
import * as S from './styled'

const Header = () => {
  const isDesktopOrTablet = useMedia({ minWidth: TABLET_VIEW })

  // If page is scrolled set header shadow to true (on server side always false)
  const [shadow, setShadow] = useState<boolean>(
    typeof window !== 'undefined' && window.scrollY ? true : false
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )

  /*
    Add shadow on scroll using lodash.throttle
  */
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }, 300)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setShadow])

  /* 
    Mobile Navigation animations
  */
  const transitions = useTransition(mobileOpen, null, {
    from: {
      height: '83px',
      opacity: 0,
    },
    enter: {
      height:
        typeof window !== 'undefined' ? window.innerHeight + 100 : '100vh',
      opacity: 1,
    },
    leave: { height: 0, opacity: 0 },
    config: config.slow,
  })

  const { mainNavigation } = data.site.siteMetadata

  return (
    <S.HeaderWrapper shadow={shadow}>
      {transitions.map(
        ({ item, key, props }: any) =>
          item && (
            <MobileNav
              navigation={mainNavigation}
              key={key}
              style={props}
              close={() => setMobileOpen(false)}
            />
          )
      )}
      <S.Header>
        <S.LogoWrapper>
          <Link to="/">
            <PoimistoLogo
              width={120}
              height={80}
              variant={mobileOpen ? 'dark' : 'light'}
            />
          </Link>
        </S.LogoWrapper>
        <S.Nav>
          {mainNavigation.map(navItem => (
            <S.NavItem key={navItem.id}>
              <Link to={navItem.link}>{navItem.title}</Link>
            </S.NavItem>
          ))}
        </S.Nav>
        {isDesktopOrTablet || (
          <S.Hamburger toggled={mobileOpen} toggle={setMobileOpen} />
        )}
      </S.Header>
    </S.HeaderWrapper>
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
