import React from 'react';
import styles from './TodoList.module.css';

type Props = React.PropsWithChildren<{
    className?: string,
    title: string
}>

export default function TodoList(props: Props) {

    return <div className={[props.className ?? '', styles.container].join(' ')}>
        <h4 className={styles.title}>{props.title}</h4>
        <svg viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg" className={styles.underline} style={{width: `${(props.title.length / 2) - 1}em`}}>
            <path id="svg_line" d="m 1.986,8.91 c 55.429038,4.081 111.58111,5.822 167.11781,2.867 22.70911,-1.208 45.39828,-0.601 68.126,-0.778 28.38173,-0.223 56.76079,-1.024 85.13721,-1.33 24.17379,-0.261 48.42731,0.571 72.58115,0.571"></path>
        </svg>
        <ul className={styles.list}>
            {props.children}
        </ul>
    </div>
}