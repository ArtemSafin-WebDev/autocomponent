"use client";

import { useEffect, useState } from "react";
import styles from "./nameSearch.module.scss";
import ArrowDown from "../Icons/ArrowDown";
import Info from "../Icons/Info";
import Camera from "../Icons/Camera";
import Counter from "../Counter/Counter";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import cartIcon from "@/assets/images/cart.svg";

const checkboxes: Array<{
  id: number;
  title: string;
  checked?: boolean;
}> = [
  {
    id: 1,
    title: "Автомобильное оборудование",
  },
  {
    id: 2,
    title: "Автомобильное оборудование",
  },
  {
    id: 3,
    title: "Автомобильное оборудование",
  },
  {
    id: 4,
    title: "Автомобильное оборудование",
  },
  {
    id: 5,
    title: "Фильтры",
  },
  {
    id: 6,
    title: "Фильтры",
  },
  {
    id: 7,
    title: "Фильтры",
  },
  {
    id: 8,
    title: "Фильтры",
  },
  {
    id: 9,
    title: "Автомобильное оборудование",
    checked: true,
  },
  {
    id: 10,
    title: "Автомобильное оборудование",
  },
  {
    id: 11,
    title: "Автомобильное оборудование",
  },
  {
    id: 12,
    title: "Автомобильное оборудование",
  },
  {
    id: 13,
    title: "Фильтры",
  },
  {
    id: 14,
    title: "Фильтры",
  },
];

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

interface CheckboxProps {
  title: string;
  checkedByDefault?: boolean;
}

function Checkbox({ title, checkedByDefault }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checkedByDefault) {
      setChecked(true);
    }
  }, [checkedByDefault]);
  return (
    <button
      className={styles.checkbox}
      onClick={() => setChecked((checked) => !checked)}
    >
      <span
        className={`${styles.checkmark} ${checked ? styles.markChecked : ""}`}
      ></span>
      {title}
    </button>
  );
}

const items: NameSearchItem[] = [
  {
    id: 1,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
    articul: "3151951117010",
    brand: "BIG FILTER",
    amount: "Много",
    warehouse: "Основной склад",
    inStock: true,
    price1: "245 521, 65",
    price2: "258 521, 65",
    quantity: 232,
  },
  {
    id: 2,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
    articul: "3151951117010",
    brand: "BIG FILTER",
    amount: "Много",
    warehouse: "Основной склад",
    inStock: true,
    price1: "245 521, 65",
    price2: "258 521, 65",
    quantity: 232,
  },
  {
    id: 3,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
    articul: "3151951117010",
    brand: "BIG FILTER",
    amount: "Много",
    warehouse: "Основной склад",
    inStock: true,
    price1: "245 521, 65",
    price2: "258 521, 65",
    quantity: 232,
  },
  {
    id: 4,
    title:
      "Электродвигатель стеклоочистителя ВАЗ-2123, 1118, 2170-2190 передний н/о (разъе...",
    articul: "3151951117010",
    brand: "BIG FILTER",
    amount: "Много",
    warehouse: "Основной склад",
    inStock: true,
    price1: "245 521, 65",
    price2: "258 521, 65",
    quantity: 232,
  },
];

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
        <button className={styles.photoBtn}>
          <Camera />
        </button>
        <button className={styles.info}>
          <Info />
        </button>
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
            <span className={styles.info}>
              <Info />
            </span>
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
