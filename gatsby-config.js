module.exports = {
  siteMetadata: {
    title: `J. Pedro Ribeiro`,
    author: `J. Pedro Ribeiro`,
    description: `Hello! My name is J. Pedro Ribeiro. I’m a Brazilian frontend developer living in London. This website features some of my latest projects and my thoughts on anything web related.`,
    siteUrl: `https://jpedroribeiro.com/`,
    social: {
      twitter: `jpedroribeiro`,
      instagram: `joaopedrorib`,
      linkedin: `joaopedroribeiro`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-9307881-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `J. Pedro Ribeiro's Personal Site`,
        short_name: `J. Pedro Ribeiro`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-v052020.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};