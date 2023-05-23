"use client";

import { useCallback, useRef, useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./search.module.scss";
import arrowDown from "@/assets/images/arrow-down.svg";
import searchIcon from "@/assets/images/search.svg";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";

interface SearchMode {
  name: string;
  slug: string;
}

export default function Search() {
  const modes = useRef<SearchMode[]>([
    {
      name: "Наименование",
      slug: "byname",
    },
    {
      name: "Артикул",
      slug: "articul",
    },
    {
      name: "Внутренний код",
      slug: "internal",
    },
    {
      name: "VIN номер",
      slug: "vin",
    },
  ]);
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  const [activeMode, setActiveMode] = useState<SearchMode>(modes.current[0]);
  return (
    <div className={styles.searchWidget} ref={ref}>
      <div className={styles.selector}>
        <button
          className={styles.selectorBtn}
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {activeMode.name}
          <EmbedSVG src={arrowDown.src} />
        </button>
        <AnimatePresence>
          {toggle && (
            <motion.div
              className={styles.dropdown}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className={styles.dropdownInner}>
                {modes.current.map((mode, modeIndex) => (
                  <button
                    key={modeIndex}
                    className={`${styles.modeBtn} ${
                      activeMode === mode ? styles.modeBtnActive : ""
                    }`}
                    onClick={() => {
                      setActiveMode(mode);
                      setToggle(false);
                    }}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите наименование товара"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      </div>

      <button className={styles.submitBtn}>
        <EmbedSVG src={searchIcon.src} />
      </button>
    </div>
  );
}
