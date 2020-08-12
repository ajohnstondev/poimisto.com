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
    <S.Header>
      <S.LogoWrapper>
        <S.Logo>
          <h1>Poimisto</h1>
          <FaAngleRight size={32} color="#00cb26" />
        </S.Logo>
      </S.LogoWrapper>
      <S.Nav>
        {mainNavigation.map(navItem => (
          <S.NavItem key={navItem.id}>
            <Link to={navItem.link}>{navItem.title}</Link>
          </S.NavItem>
        ))}
      </S.Nav>
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
