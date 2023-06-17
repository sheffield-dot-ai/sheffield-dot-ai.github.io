import React, { } from "react";
import * as classes from "./SiteFooter.module.css";
import { ClassableProps, baseClassAnd } from "../../functions/css-helpers";

const SiteFooter: React.FC<ClassableProps> = props => {

    return  <footer className={baseClassAnd(classes.footer, props)}>
    <p>© 2023 WEBSITE</p>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/cookie-policy">Cookie Policy</a>
    <a href="/terms-of-service">Terms Of Service</a>
  </footer>

}

export default SiteFooter;