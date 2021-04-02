import Head from "next/head";

import Layout from "../../../../../components/layout";
import { getAllPostIds, getPostData } from "../../../../../lib/posts";
import styles from "../../../../../styles/Home.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

//IS getStaticProps() called for each item on array returned by getStaticPath()? Because getStaticPaths() is returning an array of objects,
//but getStaticProps() is receiving a single object as props
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
