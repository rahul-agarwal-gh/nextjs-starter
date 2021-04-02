import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello</h1>

        <p className={styles.description}>
          This website is created using
          <code className={styles.code}>Next.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="./staticgenration/withoutdata">
            <a className={styles.card}>
              <h3>View a Statically Generated Page without Data&rarr;</h3>
            </a>
          </Link>

          <Link href="./staticgenration/withdata">
            <a className={styles.card}>
              <h3>
                View a Statically Generated Page <em>With</em> Data&rarr;
              </h3>
              <p>Where "Page Content" Depends on External Data</p>
            </a>
          </Link>

          <Link href="./staticgenration/withdata/dynamicrouting/posts">
            <a className={styles.card}>
              <h3>View a Statically Generated Pages With Data&rarr;</h3>
              <p>
                But Where 'Page Path" Depends on External Data, or{" "}
                <span style={{ textDecoration: "underline" }}>
                  {" "}
                  Dynamic Routing
                </span>
              </p>
            </a>
          </Link>

          <Link href="./api/hello">
            <a className={styles.card}>
              <h3>API Routes&rarr;</h3>
              <p>Make an API Request using API routes</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
