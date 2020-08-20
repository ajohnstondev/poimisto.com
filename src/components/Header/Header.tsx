import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { useTransition, config } from 'react-spring'

 
import PoimistoLogo from '@/components/PoimistoLogo'
import MobileNav from '@/components/MobileNav'

import { Squash as Hamburger } from 'hamburger-react'

import * as S from './styled'


const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )

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

  /*
    Mobile navigation animations do not handle resizes very well. Use this for now. Refactor mobile nav to Layout layer later to better control how layout should behave when mobile navigation is toggled
  */
  useEffect(() => {
    const closeOnResize = () => {
      setMobileOpen(false); 
    } 
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []); // Empty array ensures that effect is only run on mount


  const { mainNavigation } = data.site.siteMetadata

  return (
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

      <S.HamburgerWrapper>
        <Hamburger toggled={mobileOpen} toggle={setMobileOpen} color={mobileOpen ? '#fff' : '#000'} />
      </S.HamburgerWrapper>
      


    </S.Header>

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
