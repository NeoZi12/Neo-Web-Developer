import { motion } from "framer-motion";
import { siHtml5, siReact, siJavascript, siNodedotjs } from "simple-icons";
import styles from "./Hero.module.css";

interface HeroProps {
  profileImage?: string;
}

/* ── Framer Motion variants ───────────────────────────────── */
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const badgesContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.65 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 10, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* ── Tech stack data ─────────────────────────────────────── */
const techStack = [
  { name: "HTML5",      path: siHtml5.path,       color: "#E34F26" },
  { name: "React",      path: siReact.path,       color: "#61DAFB" },
  { name: "JavaScript", path: siJavascript.path,  color: "#F7DF1E" },
  { name: "Node.js",    path: siNodedotjs.path,   color: "#339933" },
  // SQL — custom database/cylinder icon
  {
    name: "SQL",
    path: "M12 2C7.58 2 4 3.34 4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5c0-1.66-3.58-3-8-3zm6 17c0 .55-2.13 1.5-6 1.5S6 19.55 6 19v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V19zm0-5c0 .55-2.13 1.5-6 1.5S6 14.55 6 14v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V14zm-6-3.5C7.87 10.5 6 9.93 6 9.5V7.27C7.61 8.05 9.72 8.5 12 8.5s4.39-.45 6-1.23V9.5c0 .43-1.87 1-6 1zm0-4C7.87 6.5 6 5.93 6 5.5S7.87 4 12 4s6 .57 6 1 .5-1.87 1-6 1.5z",
    color: "#336791",
  },
];

/* ── Component ───────────────────────────────────────────── */
export function Hero({ profileImage }: HeroProps) {
  return (
    <section className={styles.section} id="hero-section">
      <div className={styles.container}>
        {/* ── Left: text content ── */}
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div className={styles.badge} variants={item}>
            <span className={styles.dotWrapper}>
              <span className={styles.dotPing} />
              <span className={styles.dotCore} />
            </span>
            <span className={styles.badgeText}>Available for work</span>
          </motion.div>

          {/* Headline & subtitle */}
          <motion.div className={styles.headlineGroup} variants={item}>
            <h1 className={styles.headline}>
              Hi, I'm Neo — <br className="hidden md:block" />
              <span className={styles.headlineGradient}>
                Freelance Web Developer
              </span>
            </h1>
            <p className={styles.subtitle}>
              I build clean, fast, and beautiful websites and web applications
              for businesses and individuals who value quality and performance.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div className={styles.actions} variants={item}>
            <a href="#work" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div className={styles.social} variants={item}>
            <a
              href="https://github.com/NeoZi12"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/neozino/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>

          {/* Tech stack */}
          <motion.div className={styles.techStack} variants={item}>
            <span className={styles.techLabel}>High knowledge on<br />softwares</span>
            <span className={styles.techDivider} aria-hidden="true" />
            <motion.div
              className={styles.techBadges}
              variants={badgesContainer}
              initial="hidden"
              animate="visible"
            >
              {techStack.map(({ name, path, color }) => (
                <motion.div
                  key={name}
                  className={styles.techBadge}
                  variants={badgeItem}
                  whileHover={{ scale: 1.12, transition: { duration: 0.18 } }}
                  title={name}
                  aria-label={name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={color}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d={path} />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right: profile image ── */}
        <motion.div
          className={styles.imageContainer}
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={profileImage ?? "https://placehold.co/600x800?text=Photo"}
            alt="Neo - Freelance Web Developer"
            className={styles.profileImg}
          />
        </motion.div>
      </div>
    </section>
  );
}
