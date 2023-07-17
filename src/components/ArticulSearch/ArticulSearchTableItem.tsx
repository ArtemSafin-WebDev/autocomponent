import styles from "./articulSearch.module.scss";
import { ArticulTableItem } from "./ArticulSearch";

import ArrowDown from "@/icons/ArrowDown";
import { useState } from "react";
import ArticulSearchCard from "./ArticulSearchCard";

interface ArticulSearchTableItemProps {
  item: ArticulTableItem;
}

export default function ArticulSearchTableItem({
  item,
}: ArticulSearchTableItemProps) {
  const { articul, items } = item;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.tableItem}>
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
          {items.map((item) => (
            <ArticulSearchCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
