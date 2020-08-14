import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import PoimistoLogo from './PoimistoLogo'

import * as S from './styled'

const Header = () => {
  const [shadow, setShadow] = useState<boolean>(
    !!globalThis.window && !!globalThis.window.scrollY
  )
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )
  // TODO: Add throttle/debounce
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShadow(true)
      } else {
        setShadow(false)
      }
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setShadow])

  const { mainNavigation } = data.site.siteMetadata

  return (
    <S.HeaderWrapper shadow={shadow}>
      <S.Header>
        <Link to="/">
          <PoimistoLogo width={120} height={80} />
        </Link>

        <S.Nav>
          {mainNavigation.map(navItem => (
            <S.NavItem key={navItem.id}>
              <Link to={navItem.link}>{navItem.title}</Link>
            </S.NavItem>
          ))}
        </S.Nav>
        <S.Menu />
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
