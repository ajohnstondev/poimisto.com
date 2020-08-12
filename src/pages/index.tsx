import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'
import AboutUs from '@/components/AboutUs'

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutUs />
    </Layout>
  )
}

export default Home
