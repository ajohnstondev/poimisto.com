import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Footer = () => {
  const data = useStaticQuery<import('generated/graphql').FooterInfoQuery>(
    query
  )

  const { title, address, zipCode, city } = data.site.siteMetadata

  return (
    <S.Footer>
      <h2>{title}</h2>
      <div>{address}</div>
      <div>{zipCode}</div>
      <div>{city}</div>
    </S.Footer>
  )
}

const query = graphql`
  query FooterInfo {
    site {
      siteMetadata {
        title
        address
        zipCode
        city
      }
    }
  }
`

export default Footer
