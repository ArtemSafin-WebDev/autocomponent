"use client";

import Counter from "../Counter/Counter";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./filterCard.module.scss";
import cartIcon from "@/assets/images/cart.svg";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

interface FilterCardProps {
  title: string;
  oem?: string;
  code?: string;
  brand?: string;
  date?: string;
  inStock?: boolean;
  amount: string;
  price: number;
  margin: number;
  quantity?: number;
}

export default function FilterCard({
  title,
  oem,
  code,
  brand,
  inStock,
  date,
  amount,
  price,
  margin,
  quantity = 232,
}: FilterCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cell}>
        <div className={styles.title}>
          {title} <PhotoPreview src="/photo-preview.webp" alt="Превью фото" />
        </div>
      </div>
      <div className={styles.cell}>{oem}</div>
      <div className={styles.cell}>{code}</div>
      <div className={styles.cell}>{brand}</div>
      <div className={styles.cell}>
        {inStock ? (
          <div className={styles.inStock}>В наличии</div>
        ) : (
          <div>{date}</div>
        )}
      </div>
      <div className={styles.cell}>{amount}</div>
      <div className={styles.cell}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>{formatter.format(price)}</div>
            <div className={styles.price}>{formatter.format(margin)}</div>
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
