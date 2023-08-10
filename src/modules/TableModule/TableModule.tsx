"use client";

import styles from "./table.module.scss";
import StorageFilters from "@/components/StorageFilters/StorageFilters";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import {items, data} from "@/modules/TableModule/data";
import ModalModule from "@/modules/ModalModule/Modal";
import FilterModal from "@/components/FilterModal/FilterModal";
import {useEffect, useState} from "react";
import {TItem} from "@/components/ItemsTable/types";
import {useStoreTags} from "@/store/useTags";

export default function TableModule() {
  const [filterActive, setFilterActive] = useState<boolean>(false)
  const [sortedItems, setSortedItems] = useState<TItem[]>([])

  const [infoVal, setInfoVal] = useState<string>("")
  const [oemVal, setOemVal] = useState<string>("")
  const [codeVal, setCodeVal] = useState<string>("")

  const [tableVal, setTableVal] = useState<{[keyof: string]: boolean}>({
    title: false,
    oem: false,
    manuf: false,
    cost: false
  })
  const {allTags} = useStoreTags()

  useEffect(() => {
    setSortedItems(items)
  }, [])

  useEffect(() => {
    const ruCollator = new Intl.Collator('ru-RU');
    const enCollator = new Intl.Collator('en-US');
    if(tableVal?.title || tableVal?.oem || tableVal?.manuf || tableVal?.cost) {
      setSortedItems((prevVal) => [...prevVal].sort((a: TItem, b: TItem): any => {
        if(tableVal?.title) {
          return ruCollator.compare(a!.title, b!.title)
        } else if(tableVal?.oem) {
          return Number(a!.oem) - Number(b!.oem)
        } else if(tableVal?.manuf) {
          return enCollator.compare(a!.title.toLowerCase(), b!.title.toLowerCase())
        } else if(tableVal?.cost) {
          return Number(a!.pricePerUnit) - Number(b!.pricePerUnit)
        }
      }))
    } else {
      setSortedItems(items)
    }
  }, [items, setSortedItems, tableVal])

  useEffect(() => {
    setSortedItems(
      [...items]
        .filter((item: TItem) => item.title.toLowerCase().trim().includes(infoVal.toLowerCase().trim()))
        .filter((item: TItem) => item.oem.toLowerCase().trim().includes(oemVal.toLowerCase().trim()))
        .filter((item: TItem) => item.code.toLowerCase().trim().includes(codeVal.toLowerCase().trim()))
    )
  }, [infoVal, oemVal, codeVal])

  useEffect(() => {
    if(allTags.length !== 0) {
      setSortedItems(
        [...items].filter( (item: any) => allTags.some( (tag) => item.category.includes(tag) || item.manufacturer.includes(tag)) )
      )
    } else {
      setSortedItems([...items])
    }
  }, [setSortedItems, allTags])

  return (
    <section>
      <StorageFilters handlerClick={setFilterActive}/>
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
      {sortedItems?.map((item: TItem) => (
        <ItemsTable item={item} key={item?.id}/>
      ))}
      <ModalModule isOpen={filterActive} handlerClick={setFilterActive}>
        <FilterModal
          isActive={filterActive}
          closeModal={setFilterActive}
        />
      </ModalModule>
    </section>
  )
}