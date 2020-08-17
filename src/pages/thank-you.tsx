import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'
import { useSearchParams } from '@/utils/hooks'

const ThankYou: React.FC<PageProps> = () => {
  const searchParams = useSearchParams()

  if (!searchParams) {
    return null
  }

  return (
    <Layout centerContent>
      Thank you for submitting your {searchParams.get('form-name')} form
    </Layout>
  )
}

export default ThankYou
