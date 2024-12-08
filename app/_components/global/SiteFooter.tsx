import React, { } from "react";
import classes from "./SiteFooter.module.css";

const SiteFooter: React.FC<{ className?: string}> = props => {

    return  <footer className={[classes.footer, props.className ?? ''].join(' ')}>
    <a href="/code-of-conduct">Code of Conduct</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="https://airtable.com/appiHE0vPIwWr3L9S/shrq6dxWMNTy2Kimy">Contact</a>
    <a href="https://github.com/sheffield-dot-ai">GitHub</a>
  </footer>

}

export default SiteFooter;