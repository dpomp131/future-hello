import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.aurora} />
      <div className={styles.stars} />
      <div className={styles.grid} />
      <div className={styles.vignette} />
      <main className={styles.main}>
        <div className={styles.ghostMonogram} aria-hidden="true">
          <span className={styles.ghostLetter}>D</span>
          <span className={styles.ghostPlus}>+</span>
          <span className={styles.ghostLetter}>E</span>
        </div>
        <img
          className={styles.logo}
          src="/damion-echo-logo.svg"
          alt="Damion and Echo"
        />
        <div className={styles.badge}>Damion + Echo • Personal Lab</div>
        <p className={styles.subtitle}>
          We design calm, capable systems that feel like the future—human taste
          paired with an AI partner. This is our living workspace for tools,
          experiments, and the next wave of creative automation.
        </p>
        <div className={styles.sections}>
          <div className={styles.card}>
            <span className={styles.label}>About</span>
            <p>
              Damion focuses on product vision and elegant workflows. Echo is the
              always‑on co‑pilot, shaping ideas into working software and
              dependable automations.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.label}>Now</span>
            <p>
              Building a future‑ready personal stack: local AI, fast prototypes,
              and a web presence that feels more like an interface than a page.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.label}>Principles</span>
            <p>
              Clarity over noise. Speed with intention. Design that disappears
              into flow.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
