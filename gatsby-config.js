let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    siteUrl: `https://jbvisuals.co`,
  },
  flags: {
    // FAST_DEV: true,
    DEV_SSR: false,
    // QUERY_ON_DEMAND: true,
    // FAST_REFRESH: true,
    // LAZY_IMAGES: true,
  },
  plugins: [
    // `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/404`, `/layouts`],
      },
    },
    // `gatsby-plugin-preact`,
    // `gatsby-plugin-gatsby-cloud`,
    // Make sure this plugin is first in the array of plugins
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111111111-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jbvisuals.co",
        sitemap: "https://jbvisuals.co/sitemap.xml",
        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                disallow: ["/"],
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/layouts"],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
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
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Lato`,
                variants: [`300`, `400`, `500`, `700`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JB Visuals`,
        short_name: `JB Visuals`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#323232`,
        icon: `src/assets/icons/short-logo.png`, // This path is relative to the root of the site.
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `DM Sans\:100,400,500,700`,
    //       `Merriweather\:100,300,400,600,700`,
    //     ],
    //     display: "swap",
    //   },
    // },
  ],
}
