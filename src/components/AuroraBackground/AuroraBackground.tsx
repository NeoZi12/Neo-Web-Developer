import React, { ReactNode } from "react";
import styles from "./AuroraBackground.module.css";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const auroraClass = [
    styles.aurora,
    showRadialGradient ? styles.auroraWithMask : "",
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperClass = [styles.wrapper, className]
    .filter(Boolean)
    .join(" ");

  return (
    <main>
      <div className={wrapperClass} {...props}>
        <div className={styles.overlay}>
          <div className={auroraClass} />
        </div>
        {children}
      </div>
    </main>
  );
};
