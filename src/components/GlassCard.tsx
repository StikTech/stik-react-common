import styles from "./styles.module.css";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const GlassCard = ({ children, className, style }: GlassCardProps) => {
  const classes = [styles["glass-card"], className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
