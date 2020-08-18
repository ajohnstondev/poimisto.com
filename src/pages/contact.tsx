import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'
import ContactUs from '@/components/ContactUs'

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout centerContent>
      <ContactUs />
    </Layout>
  )
}

export default Contact
