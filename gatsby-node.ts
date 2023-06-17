import type { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";
import { createStaticPages } from "./gatsby-page-creators";
import readingTime from "reading-time";
import packageJson from './package.json';

export const createPages: GatsbyNode["createPages"] = async (args) => {
  await createStaticPages(args);
}

/**
 * Intercept and modify the GraphQL schema
 */
export const onCreateNode: GatsbyNode["onCreateNode"] = (args) => {
  const { node, getNode, actions } = args;
  if (node.internal.type === "Mdx") {
    // Add a new field -- route -- which can be accessed from the schema under fields { route }.
    const route = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    }).toLowerCase();
    actions.createNodeField({
      node,
      name: "route",
      value: route,
    })
    actions.createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string)
    })
  }
}