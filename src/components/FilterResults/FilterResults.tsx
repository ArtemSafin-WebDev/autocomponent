"use client";

import { Dispatch, SetStateAction, useMemo, useState } from "react";
import styles from "./filterResults.module.scss";
import ArrowDown from "@/icons/ArrowDown";
import Tooltip from "../Tooltip/Tooltip";
import FilterCard from "../FilterCard/FilterCard";
import { FiltersCardItem } from "@/types/api";

type Sort = "name" | "oem" | "brand" | "price" | "";

export default function FilterResults({
  items,
  sort,
  setSort,
}: {
  items: FiltersCardItem[];
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
}) {
  const [nameSearch, setNameSearch] = useState("");
  const [oemSearch, setOemSearch] = useState("");
  const [codeSearch, setCodeSearch] = useState("");

  const filteredItems = useMemo(() => {
    let filtered = [...items];

    if (nameSearch.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().startsWith(nameSearch.toLowerCase())
      );
    }
    if (oemSearch.trim() !== "") {
      filtered = filtered.filter((item) => {
        const oem = item.oem;
        if (!oem) return true;
        if (oem.toLowerCase().startsWith(oemSearch.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }
    if (codeSearch.trim() !== "") {
      filtered = filtered.filter((item) => {
        const code = item.code;
        if (!code) return true;
        if (code.toLowerCase().startsWith(codeSearch.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }

    return filtered;
  }, [nameSearch, oemSearch, codeSearch, items]);
  return (
    <div className={styles.filterResults}>
      <div className={styles.filterResultsHeader}>
        <div className={styles.filterResultsHeaderItem}>
          <div
            className={`${styles.sortBtn} ${
              sort === "name" ? styles.active : ""
            }`}
            onClick={() => {
              if (sort === "name") {
                setSort("");
              } else {
                setSort("name");
              }
            }}
          >
            Наименование
            <ArrowDown />
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value={nameSearch}
              onChange={(event) => setNameSearch(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.filterResultsHeaderItem}>
          <div
            className={`${styles.sortBtn} ${
              sort === "oem" ? styles.active : ""
            }`}
            onClick={() => {
              if (sort === "oem") {
                setSort("");
              } else {
                setSort("oem");
              }
            }}
          >
            OEM/Арт. производителя
            <ArrowDown />
          </div>

          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value={oemSearch}
              onChange={(event) => setOemSearch(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.filterResultsHeaderItem}>
          <div className={styles.filterResultsHeaderTitle}>Код</div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value={codeSearch}
              onChange={(event) => setCodeSearch(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.filterResultsHeaderItem}>
          <div
            className={`${styles.sortBtn} ${
              sort === "brand" ? styles.active : ""
            }`}
            onClick={() => {
              if (sort === "brand") {
                setSort("");
              } else {
                setSort("brand");
              }
            }}
          >
            Производитель
            <ArrowDown />
          </div>
        </div>
        <div className={styles.filterResultsHeaderItem}>
          <div
            className={`${styles.filterResultsHeaderTitle} ${styles.withTooltip}`}
          >
            Срок поставки
            <Tooltip text="Текст тултипа" />
          </div>
        </div>
        <div className={styles.filterResultsHeaderItem}>
          <div className={styles.filterResultsHeaderTitle}>Остаток</div>
        </div>

        <div className={styles.filterResultsHeaderItem}>
          <div className={styles.priceWrapper}>
            <div
              className={`${styles.sortBtn} ${
                sort === "price" ? styles.active : ""
              }`}
              onClick={() => {
                if (sort === "price") {
                  setSort("");
                } else {
                  setSort("price");
                }
              }}
            >
              Цена, ₽
              <ArrowDown />
            </div>
            <Tooltip text="Текст тултипа" />
          </div>
        </div>
      </div>
      <ul className={styles.list}>
        {filteredItems.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <FilterCard
              title={item.title}
              oem={item.oem}
              code={item.code}
              inStock={item.inStock}
              brand={item.brand}
              amount={item.amount}
              price={item.price}
              margin={item.margin}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
