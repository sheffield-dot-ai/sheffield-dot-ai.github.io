import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sheffield.ai`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "page",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {}
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sheffield.ai',
        sitemap: 'https://https://sheffield.ai/sitemap/sitemap-0.xml',
        policy: []
      }
    },



  ]
};

export default config;
