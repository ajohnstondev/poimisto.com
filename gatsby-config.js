const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Poimisto',
    mainNavigation: [
      { id: 0, title: 'Contact Us', link: '/contact' },
      { id: 1, title: 'About Us', link: '/about' },
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'Assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@/components': 'src/components',
          '@/assets': 'src/assets',
        },
        extensions: ['ts', 'tsx'],
      },
    },
    'gatsby-plugin-typescript',
  ],
}
