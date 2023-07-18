import styles from "./articulSearch.module.scss";
import { ArticulTableItem } from "./ArticulSearch";

import ArrowDown from "@/icons/ArrowDown";
import { useState } from "react";
import ArticulSearchCard from "./ArticulSearchCard";
import { AnimatePresence, motion } from "framer-motion";

interface ArticulSearchTableItemProps {
  item: ArticulTableItem;
}

export default function ArticulSearchTableItem({
  item,
}: ArticulSearchTableItemProps) {
  const { articul, items, otherArticuls } = item;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.tableItem}>
      <div className={styles.tableBody}>
        <div className={styles.tableItemSidebar}>
          <div className={styles.tableItemArticul}>{articul}</div>

          {expanded ? (
            <ul className={styles.otherArticulsList}>
              {otherArticuls.map((item, itemIndex) => (
                <li className={styles.otherArticulsListItem} key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

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
          {items.map((item) => (
            <ArticulSearchCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
