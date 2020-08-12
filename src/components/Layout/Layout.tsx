import React from 'react'
import { Helmet } from 'react-helmet'

import GlobalStyle from './GlobalStyle'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet></Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
