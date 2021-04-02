import styles from "./styles.module.css";

export default function WithoutData() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          A Statically Generated Page without Data
        </h1>
        <p className={styles.description}>
          This Page was Statically Generated at build time of this Website.
          <p>
            Such Pages are good for use Cases where there's no need to fetch
            data from some External Source like DB, or APIs etc. Ex.
            <ul className={styles.card}>
              <li className={styles.items}>Blogs</li>
              <li className={styles.items}>About Pages</li>
              <li className={styles.items}>Terms and Conditions etc.</li>
            </ul>
          </p>
        </p>
      </main>
    </div>
  );
}
