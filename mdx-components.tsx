import type { MDXComponents } from "mdx/types";

// NOTE we have a custom build process set up for MDX files using remark directly so this isn't actually used...
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    //h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}