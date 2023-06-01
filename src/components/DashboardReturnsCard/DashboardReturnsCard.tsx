"use client";

import styles from "./dashboardReturnsCard.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import arrowDown from "@/assets/images/arrow-down.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import DashboardReturnsCardRow, {
  DashboardReturnsCardItem,
} from "../DashboardReturnsCardRow/DashboardReturnsCardRow";

interface DashboardReturnsCardProps {
  title: string;
  amount: string;
  items: DashboardReturnsCardItem[];
}

export default function DashboardReturnsCard({
  title,
  amount,
  items,
}: DashboardReturnsCardProps) {
  const [toggle, setToggle] = useState(false);
  const [allSelected, setAllSelected] = useState(false);

  const handleDeselected = useCallback(() => {
    setAllSelected(false);
  }, []);

  return (
    <div className={`${styles.card} ${toggle ? styles.cardOpen : ""}`}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.amount}>
          <span className={styles.key}>Сумма</span>
          <span className={styles.value}>{amount}</span>
        </span>

        <EmbedSVG src={arrowDown.src} />
      </button>
      <AnimatePresence initial={false}>
        {toggle && (
          <motion.div
            className={styles.cardContent}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.cardContentInner}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Наименование</th>
                    <th>Артикул</th>
                    <th>Код</th>
                    <th>Бренд</th>
                    <th>Количество</th>
                    <th>Цена за шт, ₽ </th>
                    <th>Сумма </th>
                    <th>
                      <button
                        className={styles.checkbox}
                        onClick={() => setAllSelected((selected) => !selected)}
                      >
                        <span className={styles.checkboxText}>Выбрать все</span>
                        <span
                          className={`${styles.checkboxMark} ${
                            allSelected ? styles.markChecked : ""
                          } `}
                        ></span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <DashboardReturnsCardRow
                      item={item}
                      allSelected={allSelected}
                      deselected={handleDeselected}
                    />
                  ))}
                </tbody>
              </table>
              <button className={styles.submitReturn}>Оформить возврат</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { DashboardReturnsCardProps };
