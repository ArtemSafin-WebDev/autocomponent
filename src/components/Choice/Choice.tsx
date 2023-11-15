"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./choice.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "@/hooks/useOutsideClick";
import ArrowDown from "@/icons/ArrowDown";

interface ChoiceItem {
  name: string;
  value: string | number | boolean;
}

export default function Choice<T extends ChoiceItem>({
  choices,
  onSelect,
  prefix = "",
  selected,
}: {
  onSelect: (value: T) => void;
  prefix?: string;
  choices: T[];
  selected: T;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setOpen(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  const choose = (item: T) => {
    onSelect(item);
  };

  useEffect(() => {
    choose(selected);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles.btn} ${open ? styles.open : ""}`}
        onClick={() => setOpen((value) => !value)}
      >
        {prefix + " "}
        {selected ? (prefix ? selected.name.toLowerCase() : selected.name) : ""}
        <ArrowDown />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.dropdownInner}>
              {choices.map((choice) => (
                <button
                  className={`${styles.choice} ${
                    selected.value === choice.value ? styles.active : ""
                  }`}
                  onClick={() => {
                    choose(choice);
                    setOpen(false);
                  }}
                >
                  {choice.name}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
