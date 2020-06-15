require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Ben Eisenberg",
    titleTemplate: "%s - Ben Eisenberg",
    description: "Software Developer",
    url: "https://eisenberg.io",
    email: "ben@eisenberg.io",
    telNo: "+32 (0)472 62 40 93",
    github: "https://github.com/beniceberg",
    linkedIn: "https://www.linkedin.com/in/ben-eisenberg-78b22673/",
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
          '@helpers': './helpers',
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true // default
        },
        googleTagManager: {
          trackingId: '',
          // trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '',
          // pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // If you enable this optional option, Google Analytics will not be loaded at all for visitors that have “Do Not Track” enabled. While using Google Analytics does not necessarily constitute Tracking, you might still want to do this to cater to more privacy oriented users.
        respectDNT: true,
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-no-javascript`,
  ],
}
