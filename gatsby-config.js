module.exports = {
  siteMetadata: {
    title: `site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-cockpit',
    //   options: {
    //     cockpitConfig: {
    //       baseURL: 'http://dncapp.website:4040',
    //       folder: '/cockpit',
    //       accessToken: 'account-59e787c79461b3fc3dd4333613deb7',
    //       collections: ['posts'],
    //       regions: ['footer'],
    //       customComponents: [],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-source-cockpit',
      options: {
        host: 'http://dncapp.website:4040',
        accessToken: 'f8c34eb5db84023850301213f7188d',
        collectionName: ['Items'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
