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
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import cartSuccess from "@/assets/images/cart-success.svg"
import {AnimatePresence, motion} from "framer-motion";
import {clearInterval} from "timers";

export default function TableModule() {
  const [filterActive, setFilterActive] = useState<boolean>(false)
  const [sortedItems, setSortedItems] = useState<TItem[]>([])
  const [cartNoticeArray, setCardNoticeArray] = useState([])

  console.log(cartNoticeArray)
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
      <div className={styles.table__cartNotificationTable}>
        <AnimatePresence>
        {cartNoticeArray?.map((cartNotice, index) => (
          <motion.div
            initial={{y: "30%", opacity: 0}}
            animate={{
              y: "0",
              transition: {
                type: "spring",
              },
              opacity: 1
            }}
            exit={{ opacity: 0, y: "50%", transition: {
                type: "spring",
              }}}
            className={styles.table__cartNotification} key={index}>
            <Image src={cartSuccess} alt={"icon"} className={styles.table__cartNotificationImage}/>
            <p>Товар добавлен в корзину</p>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
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
        <ItemsTable
          lastId={sortedItems[sortedItems.length - 1]}
          item={item}
          id={item?.id}
          key={item?.id}
          setCardNoticeArray={setCardNoticeArray}
        />
      ))}
      <div className={styles.table__wrapperPagination}>
        <Pagination/>
      </div>
      <ModalModule isOpen={filterActive} handlerClick={setFilterActive}>
        <FilterModal
          isActive={filterActive}
          closeModal={setFilterActive}
        />
      </ModalModule>
    </section>
  )
}