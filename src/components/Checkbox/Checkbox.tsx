"use client";

import styles from "./checkbox.module.scss";
import { useEffect, useState } from "react";

interface CheckboxProps {
  title: string;
  checkedByDefault?: boolean;
  onToggle?: (value: boolean) => void;
}

export default function Checkbox({
  title,
  checkedByDefault,
  onToggle,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checkedByDefault) {
      setChecked(true);
    }
  }, [checkedByDefault]);

  useEffect(() => {
    if (typeof onToggle === "function") {
      onToggle(checked);
    }
  }, [checked]);
  return (
    <button
      className={styles.checkbox}
      onClick={() => {
        setChecked((checked) => {
          return !checked;
        });

      }}
    >
      <span
        className={`${styles.checkmark} ${checked ? styles.markChecked : ""}`}
      ></span>
      <span className={styles.text}>{title}</span>
    </button>
  );
}
