require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Ben Eisenberg",
    titleTemplate: "%s - Ben Eisenberg",
    description: "Software Engineer",
    url: "https://eisenberg.io",
    email: "ben@eisenberg.io",
    telNo: "+32 (0)472 62 40 93",
    github: "https://github.com/beniceberg",
    image: "src/assets/images/profile.jpg",
    author: "Ben Eisenberg",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ben-eisenberg`,
        short_name: `Ben`,
        start_url: `https://eisenberg.io`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components',
          '@atoms': './atoms',
          '@assets': './assets',
          helpers: './helpers', // <- will become ./src/helpers
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static' // <- will become ./public/static
          }
        }
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDraft: true,
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-no-javascript`,
  ],
}
