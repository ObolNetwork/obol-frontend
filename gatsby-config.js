module.exports = {
  siteMetadata: {
    title: `Obol Network`,
    description: `Decentralised proof of stake validation`,
    author: `@ObolNetwork`,
    backendURL: `https://develop.kyne.eu`,
    baseURL: `https://rugby.kyne.eu`,
    defaultContract: `0x2235ADe98bcD93854eEfeB9Fe98A2cC3Dd5F6E2B`,
    network: `rinkeby`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `obol-network`,
        short_name: `Obol Network`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#61ac9f`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
        legacy: true,
      },
    },
    `gatsby-theme-material-ui`,
    // // gatsby third party graphql apis
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "ENS",
    //     // This is the field under which it's accessible
    //     fieldName: "ens",
    //     // URL to query from
    //     url: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
  ],
}
