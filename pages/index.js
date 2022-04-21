import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { prefix } from '../utils/prefix';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Rufus the Cat, Cat Extraordinaire</title>
      </Head>

      <main>
        <h1 className="title">The best cat in the world</h1>
        <p>
          Rufus is a lovable and affectionate sweetheart who purrs at every
          opportunity and is big time into cuddling on the sofa and belly rubs.
        </p>
        <p>
          If you love playing with bouncy balls, blocking TV screens & computer
          monitors, sitting on your human's laptops and chasing strings, you'll
          be in good company!
        </p>
        <p>PS. Rufus is also very good at JavaScript!</p>
        <a
          href="https://twitter.com/anniebombanie_/status/1400135526494224385?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${prefix}/imgs/rufus-js.jpg`}
            height="150px"
            width="150px"
            alt="Rufus looking at JS for cats website"
          />
        </a>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>
          This mini-site was created by{' '}
          <a
            href="https://www.anniebombanie.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annie 🦄⚡
          </a>
        </p>
      </footer>
    </Layout>
  );
}
