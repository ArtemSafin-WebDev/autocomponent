import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./dashboardPricesItem.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "@/hooks/useOutsideClick";

enum DashboardPricesItemMode {
  Percent = "%",
  Fixed = "₽",
}

type DashboardPricesItemProps = {
  id: number;
  price: string;
  initialMargin?: number;
  initialMode?: DashboardPricesItemMode;
};

export default function DashboardPricesItem({
  price,
  initialMargin,
  initialMode,
  id,
}: DashboardPricesItemProps) {
  const [mode, setMode] = useState<DashboardPricesItemMode>();
  const [margin, setMargin] = useState<string | number>();

  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);

  useOnClickOutside(ref, outsideClickHandler);

  useEffect(() => {
    if (!mode) {
      if (initialMode) {
        setMode(initialMode);
      } else {
        setMode(DashboardPricesItemMode.Fixed);
      }
    }

    if (!margin && initialMargin) {
      setMargin(initialMargin);
    }
  }, [initialMode, initialMargin]);

  return (
    <div className={styles.tableItem} key={id}>
      <div className={styles.tableCell}>{price}</div>
      <div className={styles.tableCell}>
        <div className={styles.tableInputs}>
          <div className={styles.tableInputWrapper}>
            <input
              className={styles.tableInput}
              inputMode="numeric"
              value={margin}
              onChange={(event) => {
                const value = parseInt(event.target.value, 10);
                if (isNaN(value)) {
                  setMargin("");
                } else {
                  setMargin(value);
                }
              }}
            />
          </div>
          <div className={styles.tableSelect} ref={ref}>
            <button
              className={`${styles.tableSelectBtn} ${
                toggle ? styles.tableSelectBtnOpen : ""
              }`}
              onClick={() => setToggle((toggle) => !toggle)}
            >
              {mode}
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
                      className={styles.dropdownItem}
                      onClick={() => {
                        setMode(DashboardPricesItemMode.Fixed);
                        setToggle(false);
                      }}
                    >
                      ₽
                    </button>
                    <button
                      className={styles.dropdownItem}
                      onClick={() => {
                        setMode(DashboardPricesItemMode.Percent);
                        setToggle(false);
                      }}
                    >
                      %
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { DashboardPricesItemProps };

export { DashboardPricesItemMode };
