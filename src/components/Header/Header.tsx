import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import PoimistoLogo from './PoimistoLogo';

import * as S from './styled'

const Header = () => {
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )

  const { mainNavigation } = data.site.siteMetadata

  return (
    <S.HeaderWrapper>
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
