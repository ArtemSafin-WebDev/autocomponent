"use client";

import styles from "./signupSelect.module.scss";
import { useCallback, useRef, useState } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { SignupFormData } from "../Signup/Signup";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import arrowDown from "@/assets/images/arrow-down.svg";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";

interface SignupSelectItem {
  title: string;
  value: string;
}

interface SignupSelectProps {
  labelText: string;
  label: Path<SignupFormData>;
  register: UseFormRegister<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  items: SignupSelectItem[];
  remark?: string;
}

export default function SignupSelect({
  labelText,
  label,
  errors,
  register,
  items,
  remark,
}: SignupSelectProps) {
  const [activeItem, setActiveItem] = useState<SignupSelectItem>(items[0]);

  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  return (
    <div className={styles.signUpSelect} ref={ref}>
      <div className={styles.btnWrapper}>
        <div className={styles.label}>{labelText}</div>
        <button
          className={`${styles.btn} ${toggle ? styles.btnActive : ""}`}
          onClick={() => setToggle((toggle) => !toggle)}
          type="button"
        >
          <span className={styles.btnText}>{activeItem.title}</span>
          <EmbedSVG src={arrowDown.src} />
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
                {items.map((item, itemIndex) => (
                  <button
                    className={styles.dropdownBtn}
                    type="button"
                    key={itemIndex}
                    onClick={() => {
                      setActiveItem(item);
                      setToggle(false);
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <input
        type="hidden"
        readOnly
        className={styles.hiddenInput}
        value={activeItem.value}
        {...register(label)}
      />

      {remark ? <div className={styles.remark}>{remark}</div> : null}

      {errors[label]?.message && (
        <span className={styles.validationError}>{errors[label]?.message}</span>
      )}
    </div>
  );
}
