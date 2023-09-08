import { ArticulTableBlock } from "@/types/api";
import ArticulSearchTableItem from "./ArticulSearchTableItem";
import styles from "./articulSearch.module.scss";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { useState } from "react";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";

import Tooltip from "../Tooltip/Tooltip";

type ArticulSearchTableBlockProps = Omit<ArticulTableBlock, "id">;
type SortModes = "articul" | "available" | "deliveryDate" | "price" | "";

export default function ArticulSearchTableBlock({
  heading,
  items,
}: ArticulSearchTableBlockProps) {
  const [sortBy, setSortBy] = useState<SortModes>("");

  const toggleSort = (sortCriteria: SortModes) => {
    return () => {
      if (sortBy === sortCriteria) {
        setSortBy("");
      } else {
        setSortBy(sortCriteria);
      }
    };
  };

  let sortedItems = [...items];

  if (sortBy === "articul") {
    sortedItems = [...sortedItems].sort((a, b) => {
      if (a.articul < b.articul) {
        return -1;
      } else if (a.articul > b.articul) {
        return 1;
      }
      return 0;
    });
  }

  if (sortBy === "price") {
    sortedItems = [...sortedItems].sort((a, b) => {
      const minPriceA = Math.min(...a.items.map((item) => item.price1));
      const minPriceB = Math.min(...b.items.map((item) => item.price1));
      return minPriceA - minPriceB;
    });
  }

  if (sortBy === "deliveryDate") {
    sortedItems = [...sortedItems].sort((a, b) => {
      const minDeliveryDateA = Math.min(
        ...a.items.map((item) => item.delivery)
      );
      const minDeliveryDateB = Math.min(
        ...b.items.map((item) => item.delivery)
      );
      return minDeliveryDateA - minDeliveryDateB;
    });
  }

  if (sortBy === "available") {
    sortedItems = [...sortedItems].sort((a, b) => {
      const minQuantityA = Math.max(...a.items.map((item) => item.quantity));
      const minQuantityB = Math.max(...b.items.map((item) => item.quantity));
      return minQuantityB - minQuantityA;
    });
  }

  return (
    <div className={styles.tableBlock}>
      <h3 className={styles.tableBlockHeading}>{heading}</h3>
      <div className={styles.tableBlockContent}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortBy === "articul" ? styles.sortReversed : ""
              }`}
              onClick={toggleSort("articul")}
            >
              Бренд/Артикул
              <EmbedSVG src={arrowDown.src} />
            </button>
          </div>
          <div className={styles.tableHeaderCell}>Наименование</div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortBy === "available" ? styles.sortReversed : ""
              }`}
              onClick={toggleSort("available")}
            >
              Наличие
              <EmbedSVG src={arrowDown.src} />
            </button>
          </div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortBy === "deliveryDate" ? styles.sortReversed : ""
              }`}
              onClick={toggleSort("deliveryDate")}
            >
              Срок поставки
              <EmbedSVG src={arrowDown.src} />
            </button>
            <Tooltip text="Подсказка с каким-то текстом" />
          </div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortBy === "price" ? styles.sortReversed : ""
              }`}
              onClick={toggleSort("price")}
            >
              Цена, ₽
              <EmbedSVG src={arrowDown.src} />
            </button>
            <Tooltip text="Подсказка с каким-то текстом" />
          </div>
        </div>
        {sortedItems.map((item) => (
          <ArticulSearchTableItem
            key={item.id}
            item={item}
            sortOrder={sortBy}
          />
        ))}
      </div>
    </div>
  );
}

export type { SortModes };
