import React, { } from "react";
import '../index.css';
import * as classes from "./TextyPageLayout.module.css";
import sheffieldLandscapeImage from "../images/sheffield-landscape.jpg";
import { graphql, HeadFC, Link } from "gatsby"
import { LayoutPagePropsAnd } from "./LayoutPageProps";
import MdxBlock from "../components/marketing/MdxBlock";
import CommonHeadTags from "../components/seo/CommonHeadTags";
import robotAndCityImage from "../images/robot-and-city.svg";
import sheffieldAiTextImage from "../images/text-only.svg";
import SiteFooter from "../components/seo/SiteFooter";

const TextyPageLayout: React.FC<LayoutPagePropsAnd<{}>> = (props) => {

  return <main className={classes.main}>
    <header className={classes.header}>
      <div className={[classes.container, classes.headerContents].join(' ')}>
        <Link to={'/'}><img className={classes.textLogo} src={sheffieldAiTextImage} alt="sheffield.ai" /></Link>
        <img className={classes.robotAndCity} src={robotAndCityImage} alt="Image of robot" />
      </div>
    </header>
    <section className={classes.body} style={{ backgroundImage: `url(${sheffieldLandscapeImage})` }}>
      <div className={classes.container}>
        <div className={classes.panel}>
          <h1 className={classes.pageTitle}>{props.data.mdx!.frontmatter!.title}</h1>
          <MdxBlock className={classes.markdown}>
            {props.children}
          </MdxBlock>

        </div>

        <SiteFooter className={classes.footer} />
      </div>
    </section>
  </main>
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