import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  title: string;
  description: string;
  screenshotCount: number;
}

function getScreenshots(id: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/projects/${id}/screen-${i + 1}.png`);
}

const projectsData: Project[] = [
  {
    id: "jobizz",
    title: "Jobizz",
    description: "A modern job-board platform connecting candidates with top employers.",
    screenshotCount: 6,
  },
  {
    id: "mia-tax",
    title: "Mia Tax Consultant",
    description: "A professional landing page for a tax consultancy firm.",
    screenshotCount: 3,
  },
  {
    id: "neo-zino",
    title: "Neo Zino Portfolio",
    description: "A premium personal portfolio showcasing full-stack web development work.",
    screenshotCount: 3,
  },
  {
    id: "bruna-barros",
    title: "Bruna Barros Portfolio",
    description: "An elegant portfolio site for a creative professional.",
    screenshotCount: 3,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  function openProject(project: Project) {
    setCurrentImageIndex(0);
    setScreenshots(getScreenshots(project.id, project.screenshotCount));
    setSelectedProject(project);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  function prev() {
    setCurrentImageIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  }

  function next() {
    setCurrentImageIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));
  }

  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, currentImageIndex, screenshots]);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2 className={styles.heading}>What I've Built</h2>
          <p className={styles.subheading}>
            Each project is a unique piece of digital craftsmanship, engineered
            to deliver exceptional performance and a seamless user experience.
          </p>
        </header>

        {/* Grid */}
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => openProject(project)}
            >
              <img
                src={`/projects/${project.id}/screen-1.png`}
                alt={project.title}
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h3 className={styles.overlayTitle}>{project.title}</h3>
                <p className={styles.overlayDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className={styles.closeBtn}
                aria-label="Close"
                onClick={closeModal}
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* Left chevron */}
              <button
                className={`${styles.navBtn} ${styles.navBtnLeft}`}
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>

              {/* Image */}
              <div className={styles.imageWrap}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={screenshots[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className={styles.modalImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* Caption bar */}
                <div className={styles.caption}>
                  <p className={styles.captionTitle}>{selectedProject.title}</p>
                  <span className={styles.captionCounter}>
                    {currentImageIndex + 1} / {screenshots.length}
                  </span>
                </div>
              </div>

              {/* Right chevron */}
              <button
                className={`${styles.navBtn} ${styles.navBtnRight}`}
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
