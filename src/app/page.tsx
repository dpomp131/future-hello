import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.grid} />
      <main className={styles.main}>
        <div className={styles.badge}>Vercel • Next.js • Free Tier</div>
        <h1 className={styles.title}>
          HELLO <span className={styles.accent}>WORLD</span>
        </h1>
        <p className={styles.subtitle}>
          A sleek, futuristic proof‑of‑concept site deployed on Vercel. Built
          with modern Next.js, glowing UI, and zero‑cost hosting.
        </p>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Pad
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <div className={styles.meta}>
          <span>⚡ Fast by default</span>
          <span>🌌 Neon‑glass UI</span>
          <span>🧭 Ready to expand</span>
        </div>
      </main>
    </div>
  );
}
