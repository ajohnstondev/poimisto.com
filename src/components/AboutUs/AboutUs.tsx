import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const AboutUs = () => {
  const data = useStaticQuery<import('generated/graphql').AboutUsQuery>(query)

  return (
    <S.AboutUs>
      <S.SectionTitle>
        We <em>help you to</em> build tech and data capabilities
      </S.SectionTitle>
    </S.AboutUs>
  )
}

const query = graphql`
  query AboutUs {
    file(relativePath: { eq: "images/alphabet-blackboard-education.webp" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutUs
