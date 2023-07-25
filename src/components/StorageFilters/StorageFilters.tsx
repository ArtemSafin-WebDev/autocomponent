"use client"

import {useState} from "react";
import styles from "./storageFilters.module.scss"
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import {TFilterBtn} from "@/components/StorageFilters/types";
import {filterBtns} from "@/components/StorageFilters/data";

export default function StorageFilters() {
  const [type, setType] = useState<string | null>("")

  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>Товары в наличии</h3>
      <div className={styles.filter__container}>
        <div className={styles.filter__block}>
          {filterBtns.map((btn: TFilterBtn) => (
            <Button
              key={btn?.id}
              text={btn?.text}
              icon={btn?.icon}
              isActive={btn?.isActive}
              type={btn?.type}
              handlerFilterClick={setType}
            />
          ))}
        </div>
        <div className={styles.filter__block}>
          <Tag count={3} text="Цена"/>
        </div>
      </div>
    </div>
  );
};


