import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'
import HomepageContent from '@/components/HomepageContent'

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomepageContent />
    </Layout>
  )
}

export default Home
