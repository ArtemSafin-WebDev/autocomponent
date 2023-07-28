"use client";

import styles from "./cart.module.scss";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import trash from "@/assets/images/trash.svg";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import checkmark from "@/assets/images/checkmark.svg";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Counter from "../Counter/Counter";

interface CartTableCardItem {
  id: number;
  title: string;
  oem: string;
  code: string;
  manufacturer: string;
  warehouse: string;
  inStock?: boolean;
  date?: string;
  pricePerUnit: string;
  quantity: number;
  total: string;
}

interface CartTableCardProps {
  item: CartTableCardItem;
  allSelected: boolean;
  deselected: () => void;
}

const items: CartTableCardItem[] = [
  {
    id: 1,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: true,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
  },
  {
    id: 2,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: true,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
  },
  {
    id: 3,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: true,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
  },
  {
    id: 4,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: false,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
    date: "1 день",
  },
  {
    id: 5,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: true,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
  },
  {
    id: 6,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: true,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
  },
  {
    id: 7,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    oem: "13062820",
    code: "337826",
    manufacturer: "Астро",
    inStock: false,
    warehouse: "Основной склад",
    pricePerUnit: "245 521, 65",
    quantity: 232,
    total: "245 521, 65",
    date: "2 дня",
  },
];

function CartTableCard({ item, allSelected, deselected }: CartTableCardProps) {
  const {
    title,
    oem,
    code,
    manufacturer,
    warehouse,
    inStock,
    date,
    pricePerUnit,
    quantity,
    total,
  } = item;
  const [checked, setChecked] = useState(false);
  console.log(checked)
  useEffect(() => {
    setChecked(allSelected);
  }, [allSelected]);

  useEffect(() => {
    if (!checked) {
      deselected();
    }
  }, [deselected, checked]);
  return (
    <div className={styles.cartTableCard}>
      <div className={styles.cartTableCardItem}>
        <button
          className={styles.cartTableCardName}
          onClick={() => setChecked((checked) => !checked)}
        >
          <span
            className={`${styles.checkmark} ${
              checked ? styles.markChecked : ""
            }`}
          ></span>
          {title}
        </button>
      </div>
      <div className={styles.cartTableCardItem}>{oem}</div>
      <div className={styles.cartTableCardItem}>{code}</div>
      <div className={styles.cartTableCardItem}>{manufacturer}</div>
      <div className={styles.cartTableCardItem}>
        <div className={styles.delivery}>
          {inStock ? (
            <div className={styles.inStock}>В наличии</div>
          ) : (
            <span className={styles.date}>{date}</span>
          )}
          <div className={styles.warehouse}>{warehouse}</div>
        </div>
      </div>
      <div className={styles.cartTableCardItem}>
        <div className={styles.price}>{pricePerUnit}</div>
      </div>
      <div className={styles.cartTableCardItem}>
        <Counter initialValue={quantity} />
      </div>
      <div className={styles.cartTableCardItem}>
        <div className={styles.deleteWrapper}>
          <div className={styles.price}>{total}</div>

          <button className={styles.cardDeleteBtn}>
            <EmbedSVG src={trash.src} />
          </button>
        </div>
      </div>
    </div>
  );
}

enum SortOrder {
  ASC = "ASC",
  DSC = "DSC",
}

export default function Cart() {
  const [sortByNameOrder, setSortByNameOrder] = useState<SortOrder>(
    SortOrder.DSC
  );
  const [sortByOem, setSortByOem] = useState<SortOrder>(SortOrder.DSC);
  const [sortByManufacturer, setSortByManufacturer] = useState<SortOrder>(
    SortOrder.DSC
  );

  const [allSelected, setAllSelected] = useState(false);
  const handleDeselected = useCallback(() => {
    setAllSelected(false);
  }, []);

  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Корзина</h1>
      <button className={styles.deleteBtn}>
        <EmbedSVG src={trash.src} />
        Удалить выбранные
      </button>
      <div className={styles.cartTable}>
        <div className={styles.cartTableHeader}>
          <span className={styles.tableHeaderCell}>
            <button
              className={styles.selectAllBtn}
              onClick={() => setAllSelected((selected) => !selected)}
            >
              <span
                className={`${styles.checkmark} ${
                  allSelected ? styles.markChecked : ""
                }`}
              ></span>
            </button>
            <button
              className={`${styles.sortBtn} ${
                sortByNameOrder === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByNameOrder((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Наименование
              <EmbedSVG src={arrowDown.src} />
            </button>
          </span>
          <span className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByOem === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByOem((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              OEM/Артикул
              <EmbedSVG src={arrowDown.src} />
            </button>
          </span>
          <span className={styles.tableHeaderCell}>Код</span>
          <span className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByManufacturer === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByManufacturer((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Производитель
              <EmbedSVG src={arrowDown.src} />
            </button>
          </span>
          <span className={styles.tableHeaderCell}>Срок поставки</span>
          <span className={styles.tableHeaderCell}>Цена за 1 шт, ₽</span>
          <span className={styles.tableHeaderCell}>Количество</span>
          <span className={styles.tableHeaderCell}>Сумма, ₽</span>
        </div>
        <div className={styles.cartTableBody}>
          {items.map((item) => (
            <CartTableCard
              item={item}
              allSelected={allSelected}
              deselected={handleDeselected}
            />
          ))}
        </div>
      </div>
      <div className={styles.summary}>
        <span className={styles.summaryKey}>Итого:</span>
        <span className={styles.summaryValue}>245 521, 65 ₽</span>
      </div>
      <Link href="/checkout" className={styles.checkoutBtn}>
        Перейти к оформлению
      </Link>
    </div>
  );
}
