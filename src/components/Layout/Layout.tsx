import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import throttle from 'lodash.throttle'

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

  const siteMetadata = data.site.siteMetadata;

  
  // If page is scrolled set HeaderWrapper shadow to true (on server side always false)
  const [scrolled, setScrolled] = useState(false);
  // change state on scroll
  useEffect(() => {
    if (window && window.scrollY > 30) setScrolled(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  return (
    <>
      <Helmet>
        <title>
          {title ? `title | ${siteMetadata.title}` : siteMetadata.title}
        </title>

      </Helmet>
      <GlobalStyle />
      
      <S.LayoutWrapper>
        <S.HeaderWrapper shadow={scrolled}>
          <S.ContentWrapper>
            <Header/>
          </S.ContentWrapper>
        </S.HeaderWrapper>
    
        <S.PageWrapper>
          <S.ContentWrapper>
            <S.MainContent>{children}</S.MainContent>
          </S.ContentWrapper>
        </S.PageWrapper>

        <S.FooterWrapper>
          <S.ContentWrapper>
            <Footer/>
          </S.ContentWrapper>
        </S.FooterWrapper>
      </S.LayoutWrapper>



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
