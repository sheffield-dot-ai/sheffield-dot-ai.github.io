import React, { } from "react";
import * as classes from "./SiteFooter.module.css";
import { ClassableProps, baseClassAnd } from "../../functions/css-helpers";

const SiteFooter: React.FC<ClassableProps> = props => {

    return  <footer className={baseClassAnd(classes.footer, props)}>
    <a href="/code-of-conduct">Code of Conduct</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="mailto:organisers@sheffield.ai">Contact</a>
    <a href="https://github.com/jcharlesworthuk/sheffield.ai">GitHub</a>
  </footer>

}

export default SiteFooter;