import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import sheffieldLandscapeImage from "../images/sheffield-landscape.jpg";
import robotAndCityImage from "../images/robot-and-city.svg";
import * as classes from "./index.module.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={classes.main} style={{ backgroundImage: `url(${sheffieldLandscapeImage})` }}>
      <section className={classes.banner}>
        <h1>Sheffield AI</h1>
        <img className={classes.robotAndCity} src={robotAndCityImage} alt="Image of robot" />
      </section>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
