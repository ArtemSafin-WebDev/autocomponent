"use client";

import { CatalogPartsCategory } from "@/types/api";
import styles from "./categoriesSidebarItem.module.scss";
import Link from "next/link";
import { useState } from "react";

type CategoriesSidebarItemProps = {
  item: CatalogPartsCategory;
};

export default function CategoriesSidebarItem({
  item,
}: CategoriesSidebarItemProps) {
  const { title, items } = item;
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item}`} key={item.id}>
      {items?.length ? (
        <button
          className={styles.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`${styles.icon} ${open ? styles.open : ""}`}></span>
          {title}
        </button>
      ) : (
        <Link href="/parts-catalog/test/test" className={styles.link}>
          {title}
        </Link>
      )}
      {items?.length ? (
        <div className={`${styles.content} ${open ? styles.open : ""}`}>
          <div className={styles.contentInner}>
            {items?.map((item) => (
              <CategoriesSidebarItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
