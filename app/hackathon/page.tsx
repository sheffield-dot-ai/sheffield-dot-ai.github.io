import classes from "./page.module.css";
import SiteFooter from "@/components/global/SiteFooter";

export default function IndexPage() {
  return <main className={classes.main}>
        <h2 className={classes.title1}>Sheffield</h2>
        <h1 className={classes.title2}>AI • Hackathon</h1>
        <h3 className={classes.title3}>May 2025
          <img src="/img/robot-and-city.svg" className={classes.robotImage } />
        </h3>
    <SiteFooter className={classes.footer} />

  </main>
}
