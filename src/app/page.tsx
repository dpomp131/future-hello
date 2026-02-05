import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sky} />
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.scanlines} />
      <div className={styles.noise} />
      <main className={styles.main}>
        <div className={styles.badge}>Next.js App Router • React Server Components</div>
        <h1 className={styles.title}>
          HELLO <span className={styles.accent}>WORLD</span>
        </h1>
        <p className={styles.subtitle}>
          A cyberpunk‑grade landing page built with modern Next.js. Fully
          server‑rendered, optimized by default, and glowing with neon motion.
        </p>
        <div className={styles.meta}>
          <span>⚡ Edge‑ready rendering</span>
          <span>🌌 Animated neon lattice</span>
          <span>🧬 Modular app directory</span>
        </div>
      </main>
    </div>
  );
}
