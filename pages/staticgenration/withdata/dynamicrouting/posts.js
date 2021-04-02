import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../../../../components/layout";
import utilStyles from "../../../../styles/Home.module.css";

import { getSortedPostsData } from "../../../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      /*  By returning allPostsData inside the props object in getStaticProps, 
            the blog posts will be passed to the Home component as a prop. Now you can access the blog posts as a property inside the props object*/
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Name is Rahul and I am a Software Engineer.</p>
        <p>Below are some Posts on Next.js </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
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
    </Layout>
  );
}
