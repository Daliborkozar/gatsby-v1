module.exports = {
  siteMetadata: {
    title: `Isušivači vlage`,
    description: `Iznajmljivanje aparata za isušivanje vlage, rešite se vlage u kratkom roku, jednostavno i bez muke. Rezultat je garantovan`,
    author: `Dalibor Kozar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `video`,
          path: `${__dirname}/src/assets/video`,
      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
