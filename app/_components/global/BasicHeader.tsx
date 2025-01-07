import React, { } from "react";
import styles from "./BasicHeader.module.css";
import container from './container.module.css';
import Link from "next/link";

const BasicHeader: React.FC<{ className?: string}> = props => {

    return  <header className={[styles.header, props.className ?? ''].join(' ')}>
      <div className={[container.container, styles.headerContents].join(' ')}>
        <Link href={'/'}><img className={styles.textLogo} src="/img/text-only.svg" alt="sheffield.ai" /></Link>
        <img className={styles.robotAndCity} src="/img/robot-and-city.svg" alt="Image of robot" />
      </div>
    </header>

}

export default BasicHeader;