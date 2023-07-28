"use client";

"Чекбокс будет брать поле checked с data, чтобы с модального окна получать значение на стр"

import styles from "./checkbox.module.scss";
import {useCallback, useEffect, useState} from "react";

interface CheckboxProps {
  title: string;
  updateStatus?: (index: number) => void;
  isChecked: boolean;
  idx: number
}

export default function Checkbox({title, updateStatus, isChecked, idx}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <button
      className={styles.checkbox}
      onClick={() =>
        updateStatus!(idx)
      }
    >
      <span
        className={`${styles.checkmark} ${isChecked ? styles.markChecked : ""}`}
      ></span>
      <span className={styles.text}>{title}</span>
    </button>
  );
}
