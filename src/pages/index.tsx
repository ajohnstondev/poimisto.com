import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'

import AboutUs from '@/components/AboutUs'
import BookAMeeting from '@/components/BookAMeeting'
import Hero from '@/components/Hero'

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />

      <AboutUs />

      <BookAMeeting />
    </Layout>
  )
}

export default Home
