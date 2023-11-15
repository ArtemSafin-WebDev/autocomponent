"use client";

import { useState } from "react";
import styles from "./toggleBtn.module.scss";

export default function ToggleBtn({
  text,
  onToggle,
}: {
  text: string;
  onToggle?: (value: boolean) => void;
}) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={styles.btn}
      onClick={() => {
        setActive(!active);
        if (onToggle) onToggle(!active);
      }}
    >
      {text}
      <span className={`${styles.toggle} ${active ? styles.active : ""}`}>
        <span className={styles.circle}></span>
      </span>
    </button>
  );
}
