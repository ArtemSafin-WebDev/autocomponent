"use client";

import { useId, useState } from "react";
import styles from "./dashboardHistory.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import DashboardHistoryCard, {
  OrderStatus,
} from "../DashboardHistoryCard/DashboardHistoryCard";
import {
  DashboardHistoryCardItem,
  DashboardHistoryCardItemStatus,
} from "@/types/api";
import InputMask from "react-input-mask";

const items: DashboardHistoryCardItem[] = [
  {
    id: 1,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Waiting,
    date: "07.12.2022",
    delay: "Задержка 7 дней",
  },
  {
    id: 2,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Created,
    date: "07.12.2022",
  },
  {
    id: 3,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Processed,
    date: "07.12.2022",
  },
  {
    id: 4,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Arrived,
    date: "07.12.2022",
  },
  {
    id: 5,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Received,
    date: "07.12.2022",
  },
  {
    id: 6,
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    brand: "Kolbenschmidt",
    productCode: "12961llecob2",
    code: "1062067",
    quantity: "322 307,50",
    amount: "1 / 0",
    status: DashboardHistoryCardItemStatus.Denied,
    date: "07.12.2022",
  },
];

export default function DashboardHistory() {
  const [search, setSearch] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [onlyActive, setOnlyActive] = useState<boolean>(false);
  const searchId = useId();

  return (
    <div className={styles.dashboardHistory}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <DashboardHistoryCard
            status={OrderStatus.Created}
            title="OPT-63429 от 13.01.2022"
            amount="125 713,20 ₽"
            date="02.02.2022"
            address="Доставка: г. Санкт-Петербург ул. Профессора Попова д. 38 кор. 32"
            items={items}
          />
        </li>
        <li className={styles.item}>
          <DashboardHistoryCard
            status={OrderStatus.Created}
            title="OPT-63429 от 13.08.2022"
            amount="125 713,20 ₽"
            date="02.02.2022"
            address="Доставка: г. Санкт-Петербург ул. Профессора Попова д. 38 кор. 32"
            items={items}
          />
        </li>
        <li className={styles.item}>
          <DashboardHistoryCard
            status={OrderStatus.Ready}
            title="OPT-63429 от 13.08.2022"
            amount="125 713,20 ₽"
            date="02.02.2022"
            address="Доставка: г. Санкт-Петербург ул. Профессора Попова д. 38 кор. 32"
            items={items}
          />
        </li>
        <li className={styles.item}>
          <DashboardHistoryCard
            status={OrderStatus.Received}
            title="OPT-63429 от 13.08.2022"
            amount="125 713,20 ₽"
            date="02.02.2022"
            address="Доставка: г. Санкт-Петербург ул. Профессора Попова д. 38 кор. 32"
            items={items}
          />
        </li>
        <li className={styles.item}>
          <DashboardHistoryCard
            status={OrderStatus.Cancelled}
            title="OPT-63429 от 13.08.2022"
            amount="125 713,20 ₽"
            date="02.02.2022"
            address="Доставка: г. Санкт-Петербург ул. Профессора Попова д. 38 кор. 32"
            items={items}
          />
        </li>
      </ul>
      <div className={styles.filters}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={searchId}>
            Поиск заказа
          </label>
          <input
            className={styles.input}
            placeholder="Введите номер заказа"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            id={searchId}
          />
        </div>
        <div className={styles.dateWrapper}>
          <div className={styles.label}>За период</div>
          <div className={styles.dateRow}>
            <div className={styles.dateInputWrapper}>
              <InputMask
                mask="99.99.99"
                value={fromDate}
                onChange={(event: any) => setFromDate(event.target.value)}
                className={styles.dateInput}
                placeholder="дд.мм.гг"
              ></InputMask>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.dateInputWrapper}>
              <InputMask
                mask="99.99.99"
                value={toDate}
                onChange={(event: any) => setToDate(event.target.value)}
                className={styles.dateInput}
                placeholder="дд.мм.гг"
              ></InputMask>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.filledBtn}>Показать</button>
          <button
            className={styles.outlineBtn}
            onClick={() => {
              setSearch("");
              setOnlyActive(false);
            }}
          >
            Сбросить
          </button>
        </div>
        <button
          className={styles.toggle}
          onClick={() => setOnlyActive((active) => !active)}
        >
          <span
            className={`${styles.toggleCheckbox} ${
              onlyActive ? styles.toggleActive : ""
            }`}
          >
            <motion.span className={styles.circle} layout></motion.span>
          </span>
          <span className={styles.toggleText}>Только активные заказы</span>
        </button>
      </div>
    </div>
  );
}
