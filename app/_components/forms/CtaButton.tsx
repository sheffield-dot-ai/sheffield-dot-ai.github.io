import React, { useState } from "react";
import styles from "./CtaButton.module.css";

const CtaButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = props => {

    return <button {...props} className={[styles.cta, props.className ?? ''].join(' ')}>
        {props.children}
    </button>
}

export const CtaLinkButton: React.FC<React.PropsWithChildren<{ className?: string, href: string }>> = props => {

    return <a {...props} className={[styles.cta, styles.link, props.className ?? ''].join(' ')}>
        {props.children}
    </a>
}

export default CtaButton;