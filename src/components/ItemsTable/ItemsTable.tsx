"use client"

import styles from "./itemsTable.module.scss"
import {IItemsTable, TItem} from "@/components/ItemsTable/types";
import Counter from "@/components/Counter/Counter";
import Button from "@/components/Button/Button";
import CartIcon from "@/assets/images/cartWhite.svg"
import PhotoPreview from "@/components/PhotoPreview/PhotoPreview";

export  const btnStyle: {[keyof: string]: string} = {
  "height": "3.4rem",
  "padding": ".7rem 1.5rem"
}

export default function ItemsTable ({item}: IItemsTable) {
  const {
    balance,
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
  }: TItem = item
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__block}>
          {title} <PhotoPreview src="/photo-preview.webp" />
        </div>
        <div className={styles.item__block}>{oem}</div>
        <div className={styles.item__block}>{code}</div>
        <div className={styles.item__block}>{manufacturer}</div>
        <div className={`${styles.item__block} ${styles.item__block__status}`}>
          {inStock ? <p className={styles.item__instock}>В наличии</p> : <p>{date}</p>}
        </div>
        <div className={styles.item__block}>{balance}</div>
        <div className={styles.item__block}>{pricePerUnit}</div>
        <div className={`${styles.item__block} ${styles.item__block__cart}`}>
          <Counter initialValue={quantity}/>
          <Button icon={CartIcon} isActive={true} style={btnStyle}/>
        </div>
      </div>
    </>
  );
};



