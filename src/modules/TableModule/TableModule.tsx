"use client";

import styles from "./table.module.scss";
import StorageFilters from "@/components/StorageFilters/StorageFilters";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import {items} from "@/modules/TableModule/data";
import {useModalStore} from "@/store/useModalStore";
import ModalModule from "@/modules/ModalModule/Modal";
import FilterModal from "@/components/FilterModal/FilterModal";

export default function TableModule() {
  const {isFilterActive, changeFilterState} = useModalStore()

  return (
    <section>
      <StorageFilters/>
      <HeaderTable/>
      {items?.map((item) => (
        <ItemsTable item={item} key={item?.id}/>
      ))}
      <ModalModule isOpen={isFilterActive} handlerClick={changeFilterState}>
        <FilterModal isActive={isFilterActive}/>
      </ModalModule>
    </section>
  )
}