"use client";

import styles from "./table.module.scss";
import StorageFilters from "@/components/StorageFilters/StorageFilters";
import ItemsTable from "@/components/ItemsTable/ItemsTable";
import HeaderTable from "@/components/HeaderTable/HeaderTable";
import {items} from "@/modules/TableModule/data";

export default function TableModule() {
  return (
    <section>
      <StorageFilters/>
      <HeaderTable/>
      {items?.map((item) => (
        <ItemsTable item={item} key={item?.id}/>
      ))}
    </section>
  )
}