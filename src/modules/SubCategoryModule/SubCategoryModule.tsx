"use client";
import styles from "./subcategory.module.scss";
import { useEffect, useState } from "react";
import { TItem } from "@/components/ItemsTable/types";
import { useStoreTags } from "@/store/useTags";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import SubCategoryTags from "@/components/SubCategoryTags/SubCategoryTags";
import Switch from "@/components/Switch/Switch";
import arrowDown from "@/assets/images/arrow-down.svg";
import Image from "next/image";
import Pagination from "@/components/Pagination/Pagination";
import {fetchStorageData} from "@/clientApi/fetchStorageData";

export default function SubCategoryModule() {
  const [sortedItems, setSortedItems] = useState<TItem[]>([]);

  const [infoVal, setInfoVal] = useState<string>("");
  const [oemVal, setOemVal] = useState<string>("");
  const [codeVal, setCodeVal] = useState<string>("");
  const [tagVal, setTagVal] = useState<string>("");

  const [inStockActive, setInStockActive] = useState<boolean>(false);
  const [autoLoading, setAutoLoading] = useState<boolean>(false);
  const [items, setItems] = useState([])

  const [tableVal, setTableVal] = useState<{ [keyof: string]: boolean }>({
    title: false,
    oem: false,
    manuf: false,
    cost: false,
  });
  const [isPagesActive, setIsPagesActive] = useState<boolean>(false);
  const { allTags } = useStoreTags();

  useEffect(() => {
    fetchStorageData()
      .then((res: any) => setItems(res))

  }, [setItems]);

  useEffect(() => {
    setSortedItems(items)
  }, [setSortedItems]);

  useEffect(() => {
    const ruCollator = new Intl.Collator("ru-RU");
    const enCollator = new Intl.Collator("en-US");
    if (tableVal?.title || tableVal?.oem || tableVal?.manuf || tableVal?.cost) {
      setSortedItems((prevVal) =>
        [...prevVal].sort((a: TItem, b: TItem): any => {
          if (tableVal?.title) {
            return ruCollator.compare(a!.title, b!.title);
          } else if (tableVal?.oem) {
            return Number(a!.oem) - Number(b!.oem);
          } else if (tableVal?.manuf) {
            return enCollator.compare(
              a!.title.toLowerCase(),
              b!.title.toLowerCase()
            );
          } else if (tableVal?.cost) {
            return Number(a!.pricePerUnit) - Number(b!.pricePerUnit);
          }
        })
      );
    } else {
      setSortedItems(items);
    }
  }, [items, setSortedItems, tableVal]);

  useEffect(() => {
    setSortedItems(
      [...items]
        .filter((item: TItem) =>
          item.title.toLowerCase().trim().includes(infoVal.toLowerCase().trim())
        )
        .filter((item: TItem) =>
          item.oem.toLowerCase().trim().includes(oemVal.toLowerCase().trim())
        )
        .filter((item: TItem) =>
          item.code.toLowerCase().trim().includes(codeVal.toLowerCase().trim())
        )
    );
  }, [infoVal, oemVal, codeVal]);

  useEffect(() => {
    if (allTags.length !== 0) {
      setSortedItems(
        [...items].filter((item: any) =>
          allTags.some(
            (tag) =>
              item.category.includes(tag) || item.manufacturer.includes(tag)
          )
        )
      );
    } else {
      setSortedItems([...items]);
    }
  }, [setSortedItems, allTags]);
  return (
    <div className={styles.subcategory}>
      <h2 className={styles.subcategory__title}>Запчасти для отечественных</h2>
      <div className={styles.subcategory__container}>
        <SubCategoryTags handleClick={setTagVal} value={tagVal} />
        <ul className={styles.subcategory__switches}>
          <li>
            <p>В наличии</p>
            <Switch isActive={inStockActive} setIsActive={setInStockActive} />
          </li>
          <li>
            <p>Автоподгрузка страниц</p>
            <Switch isActive={autoLoading} setIsActive={setAutoLoading} />
          </li>
          <li>
            <button
              className={styles.subcategory__pagesBtn}
              onClick={() => setIsPagesActive((prevVal: boolean) => !prevVal)}
            >
              Показывать по 300
              <Image
                src={arrowDown}
                alt={"icon"}
                className={
                  isPagesActive
                    ? styles.subcategory__pagesBtnIcon_active
                    : styles.subcategory__pagesBtn
                }
              />
            </button>
          </li>
        </ul>
        <HeaderTable
          tableVal={tableVal}
          setTableVal={setTableVal}
          infoVal={infoVal}
          setInfoVal={setInfoVal}
          oemVal={oemVal}
          setOemVal={setOemVal}
          codeVal={codeVal}
          setCodeVal={setCodeVal}
        />
      </div>
      {sortedItems?.map((item: TItem) => (
        <ItemsTable
          item={item}
          key={item?.id}
          lastId={sortedItems[sortedItems.length - 1]}
        />
      ))}
      <div className={styles.subcategory__paginationWrapper}>
        <Pagination pagesCount={6} />
      </div>
    </div>
  );
}
