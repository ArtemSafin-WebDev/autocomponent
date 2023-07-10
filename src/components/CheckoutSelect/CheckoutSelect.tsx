"use client";

import styles from "./checkoutSelect.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { CheckoutFormData } from "../Checkout/Checkout";

interface CheckoutSelectItem {
  title: string;
  value: string;
}

interface SignupSelectProps {
  labelText?: string;
  label: Path<CheckoutFormData>;
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  items: CheckoutSelectItem[];
  remark?: string;
  placeholder?: string;
  selectedItem?: CheckoutSelectItem;
  setValue: UseFormSetValue<CheckoutFormData>;
}

export default function CheckoutSelect({
  labelText,
  label,
  errors,
  register,
  items,
  remark,
  placeholder,
  selectedItem,
  setValue,
}: SignupSelectProps) {
  const [activeItem, setActiveItem] = useState<CheckoutSelectItem | null>(null);

  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  useEffect(() => {
    if (selectedItem) {
      setActiveItem(selectedItem);
      setValue(label, selectedItem.value);
    }
  }, []);

  return (
    <div className={styles.signUpSelect} ref={ref}>
      <div className={styles.btnWrapper}>
        {labelText && <div className={styles.label}>{labelText}</div>}

        <button
          className={`${styles.btn} ${toggle ? styles.btnActive : ""}`}
          onClick={() => setToggle((toggle) => !toggle)}
          type="button"
        >
          <span className={styles.btnText}>
            {activeItem ? activeItem.title : placeholder ? placeholder : ""}
          </span>
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
                      setValue(label, item.value, { shouldValidate: true });
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
        value={activeItem ? activeItem.value : ""}
        {...register(label)}
      />

      {remark ? <div className={styles.remark}>{remark}</div> : null}

      {errors[label]?.message && (
        <span className={styles.validationError}>{errors[label]?.message}</span>
      )}
    </div>
  );
}
