import React from 'react';
import styles from './Agenda.module.css';

export const AgendaDay: React.FC<React.PropsWithChildren<{
    dayString: string,
    dateString: string,
}>> = (props) => {

    return <>
        <h3 className={styles.dayTitle}>{props.dayString}<small>{props.dateString}</small></h3>
        <ul className={styles.day}>
            {props.children}
        </ul></>


}

export const AgendaTimeSlot: React.FC<React.PropsWithChildren<{
    timeString: string,
    title: string,
    location: string,
    speakers?: { name: string, profileUrl: string }[]
}>> = (props) => {

    return <li className={styles.timeSlot}>
        <div className={styles.timeSlotTopBar}>
            <time dateTime={props.timeString}>{props.timeString}</time>
            <h4>{props.title}</h4>
            <span className={styles.venue}>{props.location}</span>
        </div>
        <div className={styles.timeSlotDetail}>
            {props.children}


        </div>
    </li>

}


export const Agenda: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return <div className={styles.agenda}>
        {props.children}
    </div>


}

export default Agenda;