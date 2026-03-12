import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Target, Layers, Info, X } from "lucide-react";
import styles from "./Services.module.css";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  detail: string;
}

const SERVICES: Service[] = [
  {
    id: "portfolio",
    icon: <User size={32} strokeWidth={1.5} />,
    title: "Portfolio Page",
    subtitle: "Professional personal site showcasing skills.",
    detail:
      "Ideal for individuals looking to highlight expertise, projects, and attract opportunities with a unique, branded digital presence — much like the website you are viewing right now.",
  },
  {
    id: "landing",
    icon: <Target size={32} strokeWidth={1.5} />,
    title: "Landing Pages",
    subtitle: "Professional business pages showcasing services and info.",
    detail:
      "High-converting single-page sites designed to drive specific actions, including company overview, contact details, service highlights, business hours, and address.",
  },
  {
    id: "fullstack",
    icon: <Layers size={32} strokeWidth={1.5} />,
    title: "Full Stack Website",
    subtitle: "Comprehensive web application with complex functionality.",
    detail:
      "End-to-end solutions combining elegant frontend interfaces with robust backend logic, databases, APIs, user authentication, and custom features for complex business needs.",
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>My Services</h2>
          <p className={styles.subheading}>
            Share your vision, and I'll handle the rest. I deliver end-to-end
            web solutions that eliminate technical headaches—seamlessly turning
            your ideas into a polished, high-performing reality.
          </p>
        </div>

        {/* Service Cards */}
        <div className={styles.cardStack}>
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className={styles.card}
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <div className={styles.iconWrap}>{service.icon}</div>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardSubtitle}>{service.subtitle}</p>
                  </div>
                </div>
                <button
                  className={styles.infoBtn}
                  aria-label={`Learn more about ${service.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  <Info size={18} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Panel */}
            <motion.div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-label={selectedService.title}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <button
                className={styles.closeBtn}
                aria-label="Close"
                onClick={() => setSelectedService(null)}
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              <div className={styles.modalIcon}>{selectedService.icon}</div>
              <h3 className={styles.modalTitle}>{selectedService.title}</h3>
              <div className={styles.modalDivider} />
              <p className={styles.modalDetail}>{selectedService.detail}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
