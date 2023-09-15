"use client";

import { useState } from "react";
import styles from "./nameSearch.module.scss";
import ArrowDown from "../../icons/ArrowDown";

import items from "./nameSearchItems";
import checkboxes from "./checkboxes";

import Checkbox from "../Checkbox/Checkbox";
import Tooltip from "../Tooltip/Tooltip";
import NameSearchCard from "./NameSearchCard";

interface CheckboxItem {
  id: number;
  title: string;
  checked?: boolean;
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

export type { CheckboxItem };
