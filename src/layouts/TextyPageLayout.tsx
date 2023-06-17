import React, { } from "react";
import '../index.css';
import * as classes from "./TextyPageLayout.module.css";
import { graphql, HeadFC, Link } from "gatsby"
import { LayoutPagePropsAnd } from "./LayoutPageProps";
import MdxBlock from "../components/marketing/MdxBlock";
import CommonHeadTags from "../components/seo/CommonHeadTags";
import SiteFooter from "../components/seo/SiteFooter";

const TextyPageLayout: React.FC<LayoutPagePropsAnd<{}>> = (props) => {

  return <div className={classes.container}>

    <div className={classes.panel}>
      <header className={classes.header}>
        <h1 className={classes.title}>{props.data.mdx?.frontmatter?.title}</h1>
        
      </header>

      <MdxBlock className={classes.markdown}>
        {props.children}
      </MdxBlock>

    </div>

    <SiteFooter />

  </div>

}

export default TextyPageLayout;

export const Head: HeadFC<Queries.Query> = props => {
  return <CommonHeadTags
    title={props.data.mdx!.frontmatter!.title!}
    description={props.data.mdx!.frontmatter!.title!}
    route={props.data.mdx!.fields!.route!} />
}

export const pageQuery = graphql`
  query ($id: String) {
      mdx(id: {eq: $id }) {
        id
        fields {
          route
        }
        frontmatter {
          title
        }
        body
      }
  }
  `