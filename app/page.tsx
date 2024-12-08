import classes from "./page.module.css";
import SiteFooter from "./_components/global/SiteFooter";
import EmailSignupInlineForm from "./_components/forms/EmailSignupInlineForm";

export default function IndexPage() {
  return <main className={classes.main}>
    <header>&nbsp;</header>
    <section className={classes.banner}>
      <div className={classes.bannerContents}>
        <img className={classes.textyLogo} src="/img/text-only.svg" alt="sheffield.ai" />
        <h2 className={classes.titleText}>Events for humans</h2>
        <div className={classes.spacer} />
        <p>Sign up for the newsletter to find out about upcoming events and more</p>
        <EmailSignupInlineForm className={classes.emailForm} />
        <p>Find us on <a href="https://sheffieldai.eventbrite.com" className={classes.imageLink}><img src="/img/eventbrite-logo.svg" alt="Eventbrite logo" /></a></p>
      </div>
      <img className={classes.robotAndCity} src="/img/robot-and-city.svg" alt="Image of robot" />
    </section>
    <SiteFooter className={classes.footer} />

  </main>
}
