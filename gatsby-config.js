module.exports = {
  siteMetadata: {
    title: 'Lima Moveis Planejados' 
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        tailwind: true
      }
    }
  ]
}