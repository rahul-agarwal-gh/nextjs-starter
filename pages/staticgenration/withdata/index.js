import styles from "./styles.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      msg: "This data was fetched at build time.",
      description:
        "Next.js invoked getStaticProps() and passed the returned data as props to our Component at the build time of this Website",
    },
  };
};
export default function WithData({ msg, description }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>A Statically Generated Page With Data</h1>
        <p className={styles.description}>
          {msg}
          <p>{description}</p>
        </p>
      </main>
    </div>
  );
}
