import styles from "./page.module.css";
import SiteFooter from "./_components/global/SiteFooter";
import EmailSignupInlineForm from "./_components/forms/EmailSignupInlineForm";

export default function IndexPage() {
  return <main className={styles.main}>
    <header>&nbsp;</header>
    <section className={styles.banner}>
      <div className={styles.bannerContents}>
        <img className={styles.textyLogo} src="/img/text-only.svg" alt="sheffield.ai" />
        <h2 className={styles.titleText}>Events for humans</h2>
        <div className={styles.spacer} />
        <p>Sign up for the newsletter to find out about upcoming events and more</p>
        <EmailSignupInlineForm className={styles.emailForm} />
        <p>Find us on <a href="https://sheffieldai.eventbrite.com" className={styles.imageLink}><img src="/img/eventbrite-logo.svg" alt="Eventbrite logo" /></a></p>
      </div>
      <img className={styles.robotAndCity} src="/img/robot-and-city.svg" alt="Image of robot" />
    </section>
    <SiteFooter className={styles.footer} />

  </main>
}
