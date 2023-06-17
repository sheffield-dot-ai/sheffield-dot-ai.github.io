import React, { } from "react";
import * as classes from "./SiteFooter.module.css";

const SiteFooter: React.FC<{}> = props => {

    return  <footer className={classes.footer}>
    <p>© 2023 WEBSITE</p>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/cookie-policy">Cookie Policy</a>
    <a href="/terms-of-service">Terms Of Service</a>
  </footer>

}

export default SiteFooter;