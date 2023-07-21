import styles from "./articulSearch.module.scss";
import { ArticulTableItem } from "./ArticulSearch";

import ArrowDown from "@/icons/ArrowDown";
import { useMemo, useState } from "react";
import ArticulSearchCard from "./ArticulSearchCard";
import { AnimatePresence, motion } from "framer-motion";

interface ArticulSearchTableItemProps {
  item: ArticulTableItem;
}

export default function ArticulSearchTableItem({
  item,
}: ArticulSearchTableItemProps) {
  const { articul, items } = item;
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = useMemo(() => {
    if (!items?.length) return [];
    if (expanded) {
      return items;
    } else {
      return [items[0]];
    }
  }, [items, expanded]);

  return (
    <motion.div className={styles.tableItem}>
      <div className={styles.tableBody}>
        <div className={styles.tableItemSidebar}>
          <div className={styles.tableItemArticul}>{articul}</div>

          <button
            className={`${styles.tableItemExpand} ${
              expanded ? styles.tableItemExpanded : ""
            }`}
            onClick={() => setExpanded((toggle) => !toggle)}
          >
            {expanded ? "Свернуть" : "Развернуть"}
            <ArrowDown />
          </button>
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
