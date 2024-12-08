import BasicHeader from '../global/BasicHeader';
import classes from './InfoPageLayout.module.css';
import container from '../global/container.module.css';
import SiteFooter from '../global/SiteFooter';

type Props = {
    frontmatter: {
        title: string
    }
};


export default function InfoPageLayout(props: React.PropsWithChildren<Props>) {


    return <main className={classes.page}>
        <BasicHeader />
        <section className={classes.body}>
            <div className={[container.container, classes.mainContainer].join(' ')}>
                <div className={classes.panel}>
                    <h1 className={classes.pageTitle}>{props.frontmatter.title}</h1>
                    {props.children}
                </div>

                <SiteFooter className={classes.footer} />
            </div>
        </section>

    </main>

}