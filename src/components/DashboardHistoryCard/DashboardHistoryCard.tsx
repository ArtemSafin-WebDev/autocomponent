"use client";

import { useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./dashboardHistoryCard.module.scss";
import arrowDown from "@/assets/images/arrow-down.svg";
import { AnimatePresence, motion } from "framer-motion";
import {
  DashboardHistoryCardItem,
  DashboardHistoryCardItemStatus,
} from "@/types/api";

enum OrderStatus {
  Created = "Заказ создан",
  Ready = "Заказ готов к выдаче",
  Cancelled = "Заказ отменён",
  Received = "Заказ выдан",
}

interface DashboardHistoryCardProps {
  title: string;
  amount: string;
  status: OrderStatus;
  date: string;
  address: string;
  items: DashboardHistoryCardItem[];
}

export default function DashboardHistoryCard({
  title,
  amount,
  status,
  date,
  address,
  items,
}: DashboardHistoryCardProps) {
  const [toggle, setToggle] = useState(false);
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
        <span className={styles.status}>
          <span className={styles.key}>Статус</span>
          <span
            className={`${styles.value} ${
              status === OrderStatus.Ready ? styles.green : ""
            } ${status === OrderStatus.Cancelled ? styles.orange : ""}
            `}
          >
            {status}
          </span>
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
              <div className={styles.cardInfoItems}>
                <div className={styles.cardInfoItem}>
                  <span className={styles.cardInfoItemKey}>
                    Планируемая дата доставки:
                  </span>
                  <span className={styles.cardInfoItemValue}>{date}</span>
                </div>
                <div className={styles.cardInfoItem}>
                  <span className={styles.cardInfoItemKey}>
                    Способ получения:
                  </span>
                  <span className={styles.cardInfoItemValue}>{address}</span>
                </div>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Наименование</th>
                    <th>Бренд / Артикул</th>
                    <th>Код</th>
                    <th>Сумма / кол-во</th>
                    <th>Статус</th>
                    <th>Ожидается </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr>
                      <td>{item.title}</td>
                      <td>
                        {item.brand}
                        <br />
                        {item.productCode}
                      </td>
                      <td>{item.code}</td>
                      <td>
                        {item.amount}
                        <br />
                        {item.quantity}
                      </td>
                      <td
                        className={`${styles.tableStatus} ${
                          item.status ===
                          DashboardHistoryCardItemStatus.Received
                            ? styles.green
                            : ""
                        } ${
                          item.status === DashboardHistoryCardItemStatus.Denied
                            ? styles.orange
                            : ""
                        }`}
                      >
                        {item.status}
                      </td>
                      <td>
                        {item.date}
                        <br />
                        {item.delay ? (
                          <span className={styles.delay}>{item.delay}</span>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { OrderStatus };
