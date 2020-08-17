import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import GlobalStyle from './GlobalStyle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import * as S from './styled'

type Props = {
  title?: string
  centerContent?: boolean
}

const Layout: React.FC<Props> = ({ children, title, centerContent }) => {
  const data = useStaticQuery<
    import('generated/graphql').LayoutSiteMetadataQuery
  >(query)

  const siteMetadata = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <title>
          {title ? `title | ${siteMetadata.title}` : siteMetadata.title}
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Coda&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <S.PageWrapper>
        <Header />
        <S.MainContent center={centerContent}>{children}</S.MainContent>
        <Footer />
      </S.PageWrapper>
    </>
  )
}

const query = graphql`
  query LayoutSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
