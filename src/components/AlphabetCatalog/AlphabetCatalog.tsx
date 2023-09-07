"use client";

import SearchIcon from "@/icons/Search";
import styles from "./alphabetCatalog.module.scss";
import { useMemo, useState } from "react";
import Link from "next/link";

interface AlphabetCatalogItem {
  letter: string;
  items: Array<{
    id: number;
    title: string;
    href: string;
  }>;
}

interface AlphabetCatalogProps {
  heading: string;
  items: AlphabetCatalogItem[];
}

export default function AlphabetCatalog({
  items,
  heading,
}: AlphabetCatalogProps) {
  const [search, setSearch] = useState<string>("");

  console.log("Items", items);

  const filteredItems = useMemo(() => {
    if (search.trim() === "") return [...items];
    const newItems: AlphabetCatalogItem[] = [];
    for (let item of items) {
      const innerItems = item.items.filter((item) =>
        item.title.toLowerCase().startsWith(search.toLowerCase())
      );
      if (innerItems.length === 0) continue;
      newItems.push({
        ...item,
        items: innerItems,
      });
    }
    console.log("Filtered items", newItems);
    return newItems;
  }, [search]);

  return (
    <div className={styles.alphabetCatalog}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.search}>
        <label className={styles.searchWrapper}>
          <SearchIcon />
          <input
            type="text"
            name="q"
            placeholder="Введите название автомобиля"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      {filteredItems?.length !== 0 ? (
        <ul className={styles.list}>
          {filteredItems.map((item) => (
            <li className={styles.listItem} key={item.letter}>
              <div className={styles.card}>
                <div className={styles.letter}>{item.letter}</div>
                <div className={styles.links}>
                  {item.items.map((item) => (
                    <Link
                      href={item.href}
                      className={styles.link}
                      key={item.id}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.notFound}>Результатов не найдено</div>
      )}
    </div>
  );
}

export type { AlphabetCatalogItem };
