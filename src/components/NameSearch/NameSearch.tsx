"use client";

import { useEffect, useState } from "react";
import styles from "./nameSearch.module.scss";
import ArrowDown from "../../icons/ArrowDown";
import InfoIcon from "../../icons/Info";

import Counter from "../Counter/Counter";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import cartIcon from "@/assets/images/cart.svg";
import items from "./nameSearchItems";
import checkboxes from "./checkboxes";
import Info from "../Info/Info";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import Checkbox from "../Checkbox/Checkbox";
import Tooltip from "../Tooltip/Tooltip";

interface CheckboxItem {
  id: number;
  title: string;
  checked?: boolean;
}

interface NameSearchItem {
  id: number;
  title: string;
  articul: string;
  brand: string;
  inStock: boolean;
  quantity: number;
  price1: string;
  price2: string;
  warehouse: string;
  amount: string;
}

interface NameSearchCardProps {
  item: NameSearchItem;
}

function NameSearchCard({ item }: NameSearchCardProps) {
  const {
    id,
    title,
    articul,
    brand,
    inStock,
    quantity,
    price1,
    price2,
    warehouse,
    amount,
  } = item;

  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>
        {title}
        <PhotoPreview src="/photo-preview.webp" alt="Превью фото" />
        <Info />
      </div>
      <div className={styles.tableCell}>{articul}</div>
      <div className={styles.tableCell}>
        <div className={styles.brand}>{brand}</div>
      </div>
      <div className={styles.tableCell}>
        <div className={styles.amountWrapper}>
          <div className={styles.amount}>{amount}</div>
          <div className={styles.warehouse}>{warehouse}</div>
        </div>
      </div>
      <div className={styles.tableCell}>
        {inStock ? <div className={styles.inStock}>В наличии</div> : null}
      </div>
      <div className={styles.tableCell}>
        <div className={styles.rightWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>{price1}</div>
            <div className={styles.price}>{price2}</div>
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

export default function NameSearch() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className={styles.nameSearch}>
      <h1 className={styles.heading}>Результаты поиска</h1>
      <div
        className={`${styles.filters} ${showAll ? styles.filtersAllShown : ""}`}
      >
        <h2 className={styles.filtersHeading}>
          По запросу <em>«фильтр»</em> найден 53871 товар
        </h2>
        <div className={styles.categories}>
          <h2 className={styles.categoriesHeading}>В категориях</h2>
          <ul className={styles.categoriesList}>
            {checkboxes.map((checkbox) => (
              <li key={checkbox.id} className={styles.categoriesListItem}>
                <Checkbox
                  title={checkbox.title}
                  checkedByDefault={checkbox.checked}
                />
              </li>
            ))}
          </ul>
          <button
            className={styles.filtersShowMore}
            onClick={() => setShowAll((value) => !value)}
          >
            {!showAll ? "Показать еще" : "Скрыть"}
            <ArrowDown />
          </button>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>Наименование</div>
          <div className={styles.tableHeaderCell}>Артикул</div>
          <div className={styles.tableHeaderCell}>Бренд</div>
          <div className={styles.tableHeaderCell}>Наличие</div>
          <div className={styles.tableHeaderCell}>
            Срок поставки
            <Tooltip text="Какой-то текст подсказки" small={true} />
          </div>
          <div className={styles.tableHeaderCell}>Цена, ₽</div>
        </div>
        <div className={styles.tableBody}>
          {items.map((item) => (
            <NameSearchCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <button className={styles.showMore}>Показать еще</button>
    </div>
  );
}

export type { NameSearchItem, CheckboxItem };
