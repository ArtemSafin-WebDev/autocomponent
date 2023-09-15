"use client";

import styles from "./cart.module.scss";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import trash from "@/assets/images/trash.svg";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Counter from "../Counter/Counter";
import { CartData, CartTableCardItem } from "@/types/api";
import numWords from "@/utils/numWord";

interface CartTableCardProps {
  item: CartTableCardItem;
  allSelected: boolean;
  deselected: () => void;
  onAmountChange?: (amount: number) => void;
}

function CartTableCard({
  item,
  allSelected,
  deselected,
  onAmountChange,
}: CartTableCardProps) {
  const priceFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
  const {
    title,
    oem,
    code,
    manufacturer,
    warehouse,
    date,
    pricePerUnit,
    amount,
  } = item;

  const [checked, setChecked] = useState(false);
  const [orderedAmount, setOrderedAmount] = useState<number>(amount);

  useEffect(() => {
    setChecked(allSelected);
  }, [allSelected]);

  useEffect(() => {
    if (!checked) {
      deselected();
    }
  }, [deselected, checked]);

  useEffect(() => {
    if (typeof onAmountChange === "function") {
      onAmountChange(orderedAmount * pricePerUnit);
    }

    return () => {
      if (typeof onAmountChange === "function") {
        onAmountChange(-1 * orderedAmount * pricePerUnit);
      }
    };
  }, [orderedAmount, pricePerUnit]);

  const total = pricePerUnit * orderedAmount;
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
          {date === 0 ? (
            <div className={styles.inStock}>В наличии</div>
          ) : (
            <span className={styles.date}>
              {`${date} ${numWords(date, ["день", "дня", "дней"])}`}
            </span>
          )}
          <div className={styles.warehouse}>{warehouse}</div>
        </div>
      </div>
      <div className={styles.cartTableCardItem}>
        <div className={styles.price}>
          {priceFormatter.format(pricePerUnit)}
        </div>
      </div>
      <div className={styles.cartTableCardItem}>
        <Counter
          initialValue={amount}
          onCounterChange={(value) => setOrderedAmount(value)}
        />
      </div>
      <div className={styles.cartTableCardItem}>
        <div className={styles.deleteWrapper}>
          <div className={styles.price}>{priceFormatter.format(total)}</div>

          <button className={styles.cardDeleteBtn}>
            <EmbedSVG src={trash.src} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cart({ data }: { data: CartData }) {
  const priceFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
  const { items } = data;

  const [allSelected, setAllSelected] = useState(false);
  const handleDeselected = useCallback(() => {
    setAllSelected(false);
  }, []);

  const [summary, setSummary] = useState<number>(0);

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
            Наименование
          </span>
          <span className={styles.tableHeaderCell}>OEM/Артикул</span>
          <span className={styles.tableHeaderCell}>Код</span>
          <span className={styles.tableHeaderCell}>Производитель</span>
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
              key={item.id}
              onAmountChange={(amount) => {
                setSummary((prev) => prev + amount);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.summary}>
        <span className={styles.summaryKey}>Итого:</span>
        <span className={styles.summaryValue}>
          {priceFormatter.format(summary)}
        </span>
      </div>
      <Link href="/checkout" className={styles.checkoutBtn}>
        Перейти к оформлению
      </Link>
    </div>
  );
}
