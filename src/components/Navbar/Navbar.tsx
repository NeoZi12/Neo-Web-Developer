import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const allLinks = [
  { label: "About Me",   href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Portfolio",  href: "#work" },
  { label: "Contact Me", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false); /* --breakpoint-lg */
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Column 1 — About Me */}
        <a href="#about" className={styles.link} onClick={close}>About Me</a>

        {/* Column 2 — Services */}
        <a href="#services" className={styles.link} onClick={close}>Services</a>

        {/* Column 3 — Brand (center) */}
        <a href="#hero-section" className={styles.brand} onClick={close}>
          Neo Zino
        </a>

        {/* Column 4 — Portfolio */}
        <a href="#work" className={styles.link} onClick={close}>Portfolio</a>

        {/* Column 5 — Contact Me */}
        <a href="#contact" className={styles.link} onClick={close}>Contact Me</a>

        {/* Hamburger — mobile only, position:absolute keeps it out of grid flow */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {allLinks.map(({ label, href }) => (
          <a key={href} href={href} className={styles.mobileLink} onClick={close}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
