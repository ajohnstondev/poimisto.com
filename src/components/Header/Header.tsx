import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { FaAngleRight } from 'react-icons/fa'

import * as S from './styled'

const Header = () => {
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query
  )

  const { mainNavigation } = data.site.siteMetadata

  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo>
              <h1>Poimisto</h1>
              <FaAngleRight size={32} color="#00cb26" />
            </S.Logo>
          </Link>
        </S.LogoWrapper>
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
