import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import sheffieldLandscapeImage from "../images/sheffield-landscape.jpg";
import robotAndCityImage from "../images/robot-and-city.svg";
import sheffieldAiTextImage from "../images/text-only.svg";
import eventBriteLogoImage from "../images/eventbrite-logo.svg";
import * as classes from "./index.module.css";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={classes.main} style={{ backgroundImage: `url(${sheffieldLandscapeImage})` }}>
      <section className={classes.banner}>
        <div className={classes.bannerContents}>
          <h1><img className={classes.textOnly} src={sheffieldAiTextImage} alt="sheffield.ai" /></h1>
          <h2 className={classes.titleText}>Events for humans</h2>
          <p>Sign up for the newsletter to find out about upcoming events and more</p>
          <div></div>
          <p>Find us on <a href="#"><img src={eventBriteLogoImage} alt="Eventbrite logo" /></a></p>
        </div>
        <img className={classes.robotAndCity} src={robotAndCityImage} alt="Image of robot" />
      </section>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
