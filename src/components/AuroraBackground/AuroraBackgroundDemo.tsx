import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            fontSize: "clamp(1.875rem, 6vw, 4.5rem)",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Background lights are cool you know.
        </div>
        <div
          style={{
            fontWeight: 200,
            fontSize: "clamp(1rem, 3vw, 2.25rem)",
            padding: "1rem 0",
          }}
        >
          And this, is chemical burn.
        </div>
        <button
          style={{
            background: "#000",
            borderRadius: "9999px",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
