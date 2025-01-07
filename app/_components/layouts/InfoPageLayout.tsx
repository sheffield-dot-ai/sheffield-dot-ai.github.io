import BasicHeader from '../global/BasicHeader';
import styles from './InfoPageLayout.module.css';
import container from '../global/container.module.css';
import SiteFooter from '../global/SiteFooter';

type Props = {
    frontmatter: {
        title: string
    }
};


export default function InfoPageLayout(props: React.PropsWithChildren<Props>) {


    return <main className={styles.page}>
        <BasicHeader />
        <section className={styles.body}>
            <div className={[container.container, styles.mainContainer].join(' ')}>
                <div className={styles.panel}>
                    <h1 className={styles.pageTitle}>{props.frontmatter.title}</h1>
                    {props.children}
                </div>

                <SiteFooter className={styles.footer} />
            </div>
        </section>

    </main>

}