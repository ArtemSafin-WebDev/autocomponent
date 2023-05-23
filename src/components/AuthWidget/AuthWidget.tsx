"use client";

import { AnimatePresence, motion } from "framer-motion";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./authWidget.module.scss";

import person from "@/assets/images/person.svg";
import { useCallback, useRef, useState } from "react";
import useOnClickOutside from "@/hooks/useOutsideClick";
import Link from "next/link";
import LoginModal from "../LoginModal/LoginModal";

export default function AuthWidget() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);

  useOnClickOutside(ref, outsideClickHandler);

  const [registerToggle, setRegisterToggle] = useState(false);

  return (
    <div className={styles.authWidget} ref={ref}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <EmbedSVG src={person.src} />
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.dropdownInner}>
              <button
                className={styles.link}
                onClick={() => {
                  setRegisterToggle(true);
                  setToggle(false);
                }}
              >
                Вход
              </button>

              <Link
                href="/signup"
                className={styles.link}
                onClick={() => setToggle(false)}
              >
                Регистрация
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LoginModal
        open={registerToggle}
        closeHandler={() => {
          setRegisterToggle(false);
        }}
        onRememberClick={() => {}}
      />
    </div>
  );
}
