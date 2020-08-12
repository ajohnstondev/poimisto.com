import React from 'react'
import { PageProps } from 'gatsby'
import styled from 'styled-components'

import Layout from '@/components/Layout'

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title>Hello world!</Title>
    </Layout>
  )
}

export default Home
