"use client";

import styles from "./table.module.scss";
import StorageFilters from "@/components/StorageFilters/StorageFilters";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import {items} from "@/modules/TableModule/data";
import ModalModule from "@/modules/ModalModule/Modal";
import FilterModal from "@/components/FilterModal/FilterModal";
import {useState} from "react";

export default function TableModule() {
  const [filterActive, setFilterActive] = useState<boolean>(false)

  return (
    <section>
      <StorageFilters handlerClick={setFilterActive}/>
      <HeaderTable/>
      {items?.map((item) => (
        <ItemsTable item={item} key={item?.id}/>
      ))}
      <ModalModule isOpen={filterActive} handlerClick={setFilterActive}>
        <FilterModal isActive={filterActive} handlerClick={setFilterActive}/>
      </ModalModule>
    </section>
  )
}