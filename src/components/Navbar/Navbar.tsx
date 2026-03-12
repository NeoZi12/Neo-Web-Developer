import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const allLinks = [
  { label: "About Me",   href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Portfolio",  href: "#work" },
  { label: "Contact Me", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Close hamburger on desktop resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Track which section occupies the vertical centre of the viewport */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            /* Hero → clear active so no link highlights */
            setActiveSection(
              entry.target.id === "hero-section" ? "" : entry.target.id
            );
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  /** Returns the CSS class string for a desktop nav link */
  const linkClass = (href: string) =>
    [styles.link, activeSection === href.slice(1) ? styles.active : ""]
      .filter(Boolean)
      .join(" ");

  /** Returns the CSS class string for a mobile nav link */
  const mobileLinkClass = (href: string) =>
    [styles.mobileLink, activeSection === href.slice(1) ? styles.active : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Column 1 — About Me */}
        <a href="#about" className={linkClass("#about")} onClick={close}>About Me</a>

        {/* Column 2 — Services */}
        <a href="#services" className={linkClass("#services")} onClick={close}>Services</a>

        {/* Column 3 — Brand (center) */}
        <a href="#hero-section" className={styles.brand} onClick={close}>
          Neo Zino
        </a>

        {/* Column 4 — Portfolio */}
        <a href="#work" className={linkClass("#work")} onClick={close}>Portfolio</a>

        {/* Column 5 — Contact Me */}
        <a href="#contact" className={linkClass("#contact")} onClick={close}>Contact Me</a>

        {/* Hamburger — mobile only */}
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
          <a key={href} href={href} className={mobileLinkClass(href)} onClick={close}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
