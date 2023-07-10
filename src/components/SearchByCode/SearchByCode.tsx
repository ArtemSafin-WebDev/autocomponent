"use client";

import styles from "./searchByCode.module.scss";
import cartIcon from "@/assets/images/cart.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import Counter from "../Counter/Counter";
import Camera from "../Icons/Camera";

interface SearchByCodeItem {
  id: number;
  code: string;
  articul: string;
  title: string;
  brand: string;
  date: string;
  city: string;
  remaining: string;
  price1: string;
  price2: string;
  quantity: number;
}

interface SearchByCodeItemProps {
  item: SearchByCodeItem;
}

const items: SearchByCodeItem[] = [
  {
    id: 1,
    code: "1062067",
    articul: "LECAR000031112",
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъ...",
    brand: "STARTVOLT",
    date: "2 дня",
    city: "Санкт-Петербург",
    remaining: "12 шт",
    price1: "245 521, 65",
    price2: "258 521, 65",
    quantity: 232,
  },
];

function SearchByCodeItem({ item }: SearchByCodeItemProps) {
  const {
    code,
    articul,
    title,
    brand,
    date,
    city,
    remaining,
    price1,
    price2,
    quantity,
  } = item;
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>{code}</div>
      <div className={styles.cardItem}>{articul}</div>
      <div className={styles.cardItem}>
        {title}{" "}
        <button className={styles.photoBtn}>
          <Camera />
        </button>
      </div>
      <div className={styles.cardItem}>{brand}</div>
      <div className={styles.cardItem}>
        <div className={styles.dateWrapper}>
          <div className={styles.date}>{date}</div>
          <div className={styles.city}>{city}</div>
        </div>
      </div>
      <div className={styles.cardItem}>{remaining}</div>
      <div className={styles.cardItem}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            <span>{price1}</span>
            <span>{price2}</span>
          </div>
          <div className={styles.btnsWrapper}>
            <Counter initialValue={quantity} />
            <button className={styles.addToCartBtn}>
              <EmbedSVG src={cartIcon.src} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchByCode() {
  return (
    <div className={styles.searchByCode}>
      <h1 className={styles.heading}>Результаты поиска</h1>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.headerCell}>Код</div>
          <div className={styles.headerCell}>Артикул</div>
          <div className={styles.headerCell}>Наименование</div>
          <div className={styles.headerCell}>Бренд</div>
          <div className={styles.headerCell}>Срок поставки</div>
          <div className={styles.headerCell}>Остаток</div>
          <div className={styles.headerCell}>Цена, ₽</div>
        </div>
        <div className={styles.body}>
          {items.map((item) => (
            <SearchByCodeItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
