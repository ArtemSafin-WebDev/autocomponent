"use client";

import styles from "./checkbox.module.scss";

interface CheckboxProps {
  title: string;
  active: boolean;
  onToggle: (value: boolean) => void;
}

export default function GoodsCheckbox({
  title,
  active,
  onToggle,
}: CheckboxProps) {
  return (
    <button
      className={styles.checkbox}
      onClick={() => {
        onToggle(!active);
      }}
    >
      <span
        className={`${styles.checkmark} ${active ? styles.markChecked : ""}`}
      ></span>
      <span className={styles.text}>{title}</span>
    </button>
  );
}
