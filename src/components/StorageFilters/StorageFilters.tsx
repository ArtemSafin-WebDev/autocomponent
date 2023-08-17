"use client"

import {useCallback, useEffect, useState} from "react";
import styles from "./storageFilters.module.scss"
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import {TFilterBtn} from "@/components/StorageFilters/types";
import {filterBtns} from "@/components/StorageFilters/data";
import filterIcon from "@/assets/images/filterIcon.svg";
import {useFilterManuf} from "@/store/useFilterManuf";
import {useFilterCategory} from "@/store/useFilterCategory";
import {useStoreTags} from "@/store/useTags";
import Switch from "@/components/Switch/Switch";
import Image from "next/image";
import arrowDown from "@/assets/images/arrow-down.svg";

interface IStorageFilters {
  handlerClick: any
}

export default function StorageFilters({handlerClick}: IStorageFilters) {
  const [crnVal, getCrnValue] = useState("")
  const [type, setType] = useState<string | null>("")
  const {checked, setChecked} = useFilterCategory()
  const {checkedManufValues, setCheckedManufValues} = useFilterManuf()
  const {allTags, setAllTags} = useStoreTags()
  const [isPageSwitchActive, setPageSwitchActive] = useState<boolean>(false)
  const [isPagesActive, setIsPagesActive] = useState<boolean>(false)

  useEffect(() => {
    setAllTags([...checkedManufValues, ...checked])
  }, [setAllTags, checkedManufValues, checked])

  const removeTagValue = useCallback((value: string) => {
    setCheckedManufValues(checkedManufValues.filter((crnValue: string) => crnValue !== value))
    setChecked(checked.filter((crnValue: string) => crnValue !== value))
  }, [allTags])

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
          <div className={styles.filter__blockTags}>
            <Tag count={allTags.length} isCounter={true}/>
            {allTags?.map((value: string, idx: number) => (
              <Tag count={allTags.length} text={value} isCounter={false} key={idx} handleClick={() => removeTagValue(value)}/>
            ))}
          </div>
          <div className={styles.filter__blockPages}>
            <div className={styles.filter__switchBlock}>
              <p>Автоподгрузка страниц</p>
              <Switch isActive={isPageSwitchActive} setIsActive={setPageSwitchActive}/>
            </div>
            <button className={styles.filter__pagesBtn} onClick={() => setIsPagesActive((prevVal: boolean) => !prevVal)}>
              Показывать по 300
              <Image src={arrowDown} alt={"icon"} className={isPagesActive ? styles.filter__pagesBtnIcon_active : styles.filter__pagesBtn}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


