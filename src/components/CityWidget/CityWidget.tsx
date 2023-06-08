"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./cityWidget.module.scss";
import logo from "@/assets/images/location.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import cross from "@/assets/images/cross.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";
import useOnClickOutside from "@/hooks/useOutsideClick";

export default function CityWidget() {
  const cities = useRef<string[]>([
    "Санкт-Петербург",
    "Волосово",
    "Лодейное поле",
    "Вологда",
    "Череповец",
    "Тихвин",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Вологда",
    "Волосово",
    "Санкт-Петербург",
    "Волосово",
    "Лодейное поле",
    "Вологда",
    "Череповец",
    "Тихвин",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Вологда",
    "Волосово",
    "Санкт-Петербург",
    "Волосово",
    "Лодейное поле",
    "Вологда",
    "Череповец",
    "Тихвин",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Лодейное поле",
    "Вологда",
    "Волосово",
  ]);
  const [city, setCity] = useState<string>(cities.current[0]);
  const [toggle, setToggle] = useState(false);
  const sbw = useScrollbarWidth();
  const ref = useRef<HTMLDivElement>(null);

  const innerModalRef = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);

  useOnClickOutside(innerModalRef, outsideClickHandler);

  useEffect(() => {
    if (toggle) {
      console.log("Open");
      document.body.classList.add(styles.modalOpen);
      document.body.style.paddingRight = sbw + "px";
      if (ref.current) {
        ref.current.style.paddingRight = sbw + "px";
      }
    } else {
      console.log("Closed");
      document.body.classList.remove(styles.modalOpen);
      document.body.style.paddingRight = "";
      if (ref.current) {
        ref.current.style.paddingRight = "";
      }
    }

    return () => {
      document.body.classList.remove(styles.modalOpen);
      document.body.style.paddingRight = "";
    };
  }, [toggle]);

  return (
    <div className={styles.cityWidget}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <span className={styles.locationIcon}>
          <EmbedSVG src={logo.src} />
        </span>
        {city}
        <span className={styles.arrowIcon}>
          <EmbedSVG src={arrowDown.src} />
        </span>
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
          >
            <div className={styles.modalInner} ref={innerModalRef}>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setToggle(false)}
              >
                <EmbedSVG src={cross.src} />
              </button>
              <h3 className={styles.heading}>Выберете регион</h3>
              <ul className={styles.list}>
                {cities.current.map((city, cityIndex) => (
                  <li className={styles.listItem} key={cityIndex}>
                    <button
                      className={styles.cityLink}
                      onClick={() => {
                        setCity(city);
                        setToggle(false);
                      }}
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
