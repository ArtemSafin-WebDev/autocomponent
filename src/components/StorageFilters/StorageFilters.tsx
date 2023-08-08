"use client"

import {useEffect, useState} from "react";
import styles from "./storageFilters.module.scss"
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import {TFilterBtn} from "@/components/StorageFilters/types";
import {filterBtns} from "@/components/StorageFilters/data";
import filterIcon from "@/assets/images/filterIcon.svg";
import {useFilterManuf} from "@/store/useFilterManuf";
import {useFilterCategory} from "@/store/useFilterCategory";
import {shallow} from "zustand/shallow";
interface IStorageFilters {
  handlerClick: any
}

export default function StorageFilters({handlerClick}: IStorageFilters) {
  const [tags, setTags] = useState<string[]>([])
  const [type, setType] = useState<string | null>("")
  const {checked} = useFilterCategory((state) =>
    ({checked: state.checked}), shallow)

  const {manufVal} = useFilterManuf()

  useEffect(() => {
    setTags([...manufVal, ...checked])
  }, [setTags, manufVal, checked])

  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>Товары в наличии</h3>
      <div className={styles.filter__container}>
        <div className={styles.filter__block}>
            <Button
              icon={filterIcon}
              text={"Фильтры"}
              isActive={true}
              handlerClick={() => handlerClick(true)}
            />
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
          <Tag count={tags.length} isCounter={true}/>
          {tags?.map((value: string, idx: number) => (
            <Tag count={tags.length} text={value} isCounter={false} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
};


