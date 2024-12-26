import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "value-compass",
  siteMetadata: {
    title: `Value Compass`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-K72079V2DD"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};

export default config;
