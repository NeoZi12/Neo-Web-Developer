import { motion } from "framer-motion";
import { Code2, Zap, Palette } from "lucide-react";
import styles from "./About.module.css";

interface AboutProps {
  aboutImage?: string;
}

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Palette, label: "Modern Design" },
];

export function About({ aboutImage }: AboutProps) {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* ── Left: profile photo ── */}
        <motion.div
          className={styles.photoCol}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.imageFrame}>
            <img
              src={aboutImage ?? "https://placehold.co/480x600?text=Photo"}
              alt="Neo Zino — Freelance Web Developer"
              className={styles.photo}
            />
          </div>
        </motion.div>

        {/* ── Right: content ── */}
        <motion.div
          className={styles.contentCol}
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Label + heading */}
          <div className={styles.headingGroup}>
            <span className={styles.label}>About Me</span>
            <h2 className={styles.heading}>
              Web Developer <br /> &amp; Software Engineer
            </h2>
          </div>

          {/* Body copy */}
          <div className={styles.body}>
            <p>
              I’m a software engineering graduate and full-stack developer
              passionate about building modern web applications.
            </p>
            <p>
              I help businesses, startups, and individuals turn their ideas into
              real digital products — creating fast, user-friendly websites and
              applications.
            </p>
            <p>
              My goal is to build solutions that look great, work smoothly, and
              provide a great experience for the people using them.
            </p>
          </div>

          {/* Highlight points */}
          <div className={styles.highlights}>
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.highlight}>
                <Icon className={styles.highlightIcon} aria-hidden="true" />
                <span className={styles.highlightLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <a href="#work" className={styles.btnPrimary}>
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
