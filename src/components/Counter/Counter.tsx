"use client";

import { useEffect, useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./counter.module.scss";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";

interface CounterProps {
  initialValue?: number;
}

export default function Counter({ initialValue }: CounterProps) {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (initialValue) {
      setCount(initialValue);
    }
  }, [initialValue]);
  return (
    <div className={styles.counter}>
      <input className={styles.counterInput} value={count} readOnly />
      <div className={styles.counterButtons}>
        <button
          className={styles.btnUp}
          onClick={() => {
            setCount((count) => ++count);
          }}
        >
          <EmbedSVG src={arrowDown.src} />
        </button>
        <button
          className={styles.btnDown}
          onClick={() => {
            if (count > 1) {
              setCount((count) => --count);
            }
          }}
          disabled={count === 1}
        >
          <EmbedSVG src={arrowDown.src} />
        </button>
      </div>
    </div>
  );
}
