import styles from "./articulSearch.module.scss";
import {
  ArticulSearchCard as TArticulSearchCard,
  ArticulTableItem,
} from "@/types/api";

import ArrowDown from "@/icons/ArrowDown";
import { useMemo, useState } from "react";
import ArticulSearchCard from "./ArticulSearchCard";
import { AnimatePresence, motion } from "framer-motion";
import { SortModes } from "./ArticulSearchTableBlock";

interface ArticulSearchTableItemProps {
  item: ArticulTableItem;
  sortOrder: SortModes;
}

export default function ArticulSearchTableItem({
  item,
  sortOrder,
}: ArticulSearchTableItemProps) {
  const { articul, items } = item;
  const [expanded, setExpanded] = useState(false);

  let sortedItems: TArticulSearchCard[] = [];

  console.log("Sort order", sortOrder);

  switch (sortOrder) {
    case "price":
      sortedItems = [...items].sort((a, b) => {
        return a.price1 - b.price1;
      });
      break;
    case "available":
      sortedItems = [...items].sort((a, b) => {
        return b.quantity - a.quantity;
      });
      break;
    case "deliveryDate":
      sortedItems = [...items].sort((a, b) => {
        return a.delivery - b.delivery;
      });
      break;
    default:
      sortedItems = [...items];
  }

  const itemsToShow = expanded ? sortedItems : [sortedItems[0]];

  return (
    <motion.div className={styles.tableItem}>
      <div className={styles.tableBody}>
        <div className={styles.tableItemSidebar}>
          <div className={styles.tableItemArticul}>{articul}</div>
          {items.length > 1 ? (
            <button
              className={`${styles.tableItemExpand} ${
                expanded ? styles.tableItemExpanded : ""
              }`}
              onClick={() => setExpanded((toggle) => !toggle)}
            >
              {expanded ? "Свернуть" : "Развернуть"}
              <ArrowDown />
            </button>
          ) : null}
        </div>
        <div className={styles.tableItemMain}>
          <AnimatePresence initial={false}>
            <ul className={styles.cardsList}>
              {itemsToShow.map((item) => (
                <motion.li
                  className={styles.cardsListItem}
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ArticulSearchCard {...item} />
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
