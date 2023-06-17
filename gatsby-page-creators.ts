// This is not a Gatsby file, it is just named like one.  Confusing I know, sorry about that. These are all called from gatsby-node.ts
import { CreatePagesArgs } from "gatsby";
import path from "path";

function allMdxPagesQuery(folderRegex: string) {
    return `query {
      allFile( filter: { dir: { regex: "${folderRegex}" } } ) {
        edges {
          node {
            childMdx { 
              id
              fields {
                route
              }
              frontmatter {
                title
                layout
              }
              internal {
                contentFilePath
              }
            }
            name
            relativeDirectory
          }
        }
      }
    }
  `
}

function removeTrailingSlash(url: string) {
    return url[url.length - 1] === '/' ? url.substr(0, url.length - 1) : url;
}


type GraphQlResponse = {
    errors?: object,
    data?: Queries.Query | undefined
}

function rejectIfEmpty(result: GraphQlResponse, reject: (reason?: any) => void, typeName: string) {
    if (result.errors) {
        console.error(result.errors);
        reject(result.errors);
        return true;
    }
    if (!result.data || !result.data?.allFile || !result.data.allFile.edges.length) {
        console.error(`ERROR: No ${typeName} pages found!`);
        reject();
        return true;
    }
    return false;
}


export const createStaticPages = (args: CreatePagesArgs) => {
    const { graphql, actions } = args;
    const layoutPath = (name: string) => `./src/layouts/${name}`
    return new Promise((resolve, reject) => {
        resolve(
            graphql<Queries.Query>(allMdxPagesQuery(`/content/`)).then((result: GraphQlResponse) => {
                if (rejectIfEmpty(result, reject, 'static')) return;
                result.data!.allFile.edges.forEach(({ node }: any) => {
                    console.log(`Creating page: ${removeTrailingSlash(node.childMdx.fields.route)}`);
                    const layout = node.childMdx.frontmatter.layout || 'StaticPageLayout.tsx';
                    actions.createPage({
                        path: removeTrailingSlash(node.childMdx.fields.route),
                        component: `${path.resolve(layoutPath(layout))}?__contentFilePath=${node.childMdx.internal.contentFilePath}`,
                        context: {
                            id: node.childMdx.id
                        },
                    })
                })

            })
        )
    });
}