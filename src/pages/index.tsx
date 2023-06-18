import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import sheffieldLandscapeImage from "../images/sheffield-landscape.jpg";
import robotAndCityImage from "../images/robot-and-city.svg";
import sheffieldAiTextImage from "../images/text-only.svg";
import eventBriteLogoImage from "../images/eventbrite-logo.svg";
import * as classes from "./index.module.css";
import EmailSignupInlineForm from "../components/forms/EmailSignupInlineForm";
import SiteFooter from "../components/seo/SiteFooter";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={classes.main} style={{ backgroundImage: `url(${sheffieldLandscapeImage})` }}>
      <header>&nbsp;</header>
      <section className={classes.banner}>
        <div className={classes.bannerContents}>
          <img className={classes.textyLogo} src={sheffieldAiTextImage} alt="sheffield.ai" />
          <h2 className={classes.titleText}>Events for humans</h2>
          <div className={classes.spacer} />
          <p>Sign up for the newsletter to find out about upcoming events and more</p>
          <EmailSignupInlineForm className={classes.emailForm} />
          <p>Find us on <a href="https://sheffieldai.eventbrite.com" className={classes.imageLink}><img src={eventBriteLogoImage} alt="Eventbrite logo" /></a></p>
        </div>
        <img className={classes.robotAndCity} src={robotAndCityImage} alt="Image of robot" />
      </section>
      <SiteFooter className={classes.footer} />

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
