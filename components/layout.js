import Head from 'next/head';
import Link from 'next/link';
import { prefix } from '../utils/prefix';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = "Rufus the Bold"
// const logo = './public/imgs/rufus-profile.jpg';
export const siteTitle = "Rufus the Bold"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Mini site of Rufus the Bold, Cat Extraordinaire"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={`${prefix}/imgs/rufus-profile.jpg`}
              className={utilStyles.borderCircle}
              height="144px"
              width="144px"
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  priority
                  src={`${prefix}/imgs/rufus-profile.jpg`}
                  className={utilStyles.borderCircle}
                  height="108px"
                  width="108px"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}