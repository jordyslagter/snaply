import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "../css/index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.landing}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <h2 className={styles.tagline}>{siteConfig.tagline}</h2>
        <a className={styles.buttonwrap} href="/snaply/docs">
          <button className={styles.button}>Getting started</button>
        </a>
      </main>
    </Layout>
  );
}
