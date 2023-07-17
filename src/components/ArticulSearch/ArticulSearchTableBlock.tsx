import { ArticulTableBlock } from "./ArticulSearch";
import ArticulSearchTableItem from "./ArticulSearchTableItem";
import styles from "./articulSearch.module.scss";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { useState } from "react";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import InfoIcon from "@/icons/Info";

type ArticulSearchTableBlockProps = Omit<ArticulTableBlock, "id">;

enum SortOrder {
  ASC = "ASC",
  DSC = "DSC",
}

export default function ArticulSearchTableBlock({
  heading,
  items,
}: ArticulSearchTableBlockProps) {
  const [sortByArticul, setSortByArticul] = useState<SortOrder>(SortOrder.DSC);
  const [sortByAvailable, setSortByAvailable] = useState<SortOrder>(
    SortOrder.DSC
  );
  const [sortByDeliveryDate, setSortByDeliveryDate] = useState<SortOrder>(
    SortOrder.DSC
  );
  const [sortByPrice, setSortByPrice] = useState<SortOrder>(SortOrder.DSC);

  return (
    <div className={styles.tableBlock}>
      <h3 className={styles.tableBlockHeading}>{heading}</h3>
      <div className={styles.tableBlockContent}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByArticul === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByArticul((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Бренд/Артикул
              <EmbedSVG src={arrowDown.src} />
            </button>
          </div>
          <div className={styles.tableHeaderCell}>Наименование</div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByAvailable === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByAvailable((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Наличие
              <EmbedSVG src={arrowDown.src} />
            </button>
          </div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByDeliveryDate === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByDeliveryDate((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Срок поставки
              <EmbedSVG src={arrowDown.src} />
            </button>
            <div className={styles.infoItem}>
              <InfoIcon />
            </div>
          </div>
          <div className={styles.tableHeaderCell}>
            <button
              className={`${styles.sortBtn} ${
                sortByPrice === SortOrder.ASC ? styles.sortReversed : ""
              }`}
              onClick={() =>
                setSortByPrice((prevOrder) => {
                  if (prevOrder === SortOrder.DSC) {
                    return SortOrder.ASC;
                  } else {
                    return SortOrder.DSC;
                  }
                })
              }
            >
              Цена, ₽
              <EmbedSVG src={arrowDown.src} />
            </button>
            <div className={styles.infoItem}>
              <InfoIcon />
            </div>
          </div>
        </div>
        {items.map((item) => (
          <ArticulSearchTableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
