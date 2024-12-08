import React, { } from "react";
import classes from "./BasicHeader.module.css";
import container from './container.module.css';
import Link from "next/link";

const BasicHeader: React.FC<{ className?: string}> = props => {

    return  <header className={[classes.header, props.className ?? ''].join(' ')}>
      <div className={[container.container, classes.headerContents].join(' ')}>
        <Link href={'/'}><img className={classes.textLogo} src="/img/text-only.svg" alt="sheffield.ai" /></Link>
        <img className={classes.robotAndCity} src="/img/robot-and-city.svg" alt="Image of robot" />
      </div>
    </header>

}

export default BasicHeader;