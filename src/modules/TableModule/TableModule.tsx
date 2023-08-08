"use client";

import styles from "./table.module.scss";
import StorageFilters from "@/components/StorageFilters/StorageFilters";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import {items} from "@/modules/TableModule/data";
import ModalModule from "@/modules/ModalModule/Modal";
import FilterModal from "@/components/FilterModal/FilterModal";
import {useEffect, useState} from "react";
import {useCheckboxFilter} from "@/store/useCheckboxFilter";
import {shallow} from "zustand/shallow";
import {data} from "@/components/FilterModalManuf/data"

export default function TableModule() {
  const [filterActive, setFilterActive] = useState<boolean>(false)

  const {setManufCheckbox} = useCheckboxFilter((state: any) =>
    ({setManufCheckbox: state.setManufCheckbox}), shallow)

  useEffect(() => {
    setManufCheckbox(data)
  }, [setManufCheckbox, data])

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