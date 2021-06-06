import {Fragment} from 'react';
import Head from 'next/head';
import styles from '../../../styles/Home.module.css';

const Header = ({ title }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="User Search Page!!" />
                <meta name="keywords" content="Next JS, REACT JS, HTML5, Hooks, SCSS" />
                <meta name="author" content="pl2ern4" />
                <meta name="rating" content="general"></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.header}>
                <p>Get User!!</p>
            </div>
        </Fragment>
    )
}

Header.defaultName = 'Header';

export default Header;