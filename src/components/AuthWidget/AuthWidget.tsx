"use client";

import { AnimatePresence, motion } from "framer-motion";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./authWidget.module.scss";

import person from "@/assets/images/person.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LoginModal from "../LoginModal/LoginModal";
import { useHoverDirty } from "react-use";
import RememberModal from "../RememberModal/RememberModal";

export default function AuthWidget() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hovered = useHoverDirty(ref);

  useEffect(() => {
    if (hovered) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [hovered]);

  const [registerToggle, setRegisterToggle] = useState(false);
  const [rememberToggle, setRememberToggle] = useState(false);

  return (
    <div
      className={`${styles.authWidget} ${toggle ? styles.hovered : ""}`}
      ref={ref}
    >
      <button className={styles.btn}>
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
        onRememberClick={() => {
          setRegisterToggle(false);
          setTimeout(() => {
            setRememberToggle(true);
          }, 400);
        }}
      />
      <RememberModal
        open={rememberToggle}
        closeHandler={() => setRememberToggle(false)}
      />
    </div>
  );
}
