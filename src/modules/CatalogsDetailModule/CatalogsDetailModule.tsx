"use client"
import styles from "./catalog.module.scss"
import CatalogDetailHeader from "@/components/CatalogDetailHeader/CatalogDetailHeader";
import {useEffect, useState} from "react";
import {data} from "@/modules/CatalogsModule/data";
import CatalogDetailTable from "@/components/CatalogDetailTable/CatalogDetailTable";
import {tableData} from "@/modules/CatalogsDetailModule/data";

interface ICatalogsDetailModule {
  id: string
}

export default function CatalogsDetailModule({id}: ICatalogsDetailModule) {
  const [detailData, setDetailData] = useState<any>()

  useEffect(() => {
    data.map((item) => {
      if(item.name.toLowerCase() === id) {
        setDetailData(item)
      }
    })
  }, [data, setDetailData])

  return (
    <section className={styles.catalogDetail}>
      <h3 className={styles.catalogDetail__title}>Оригинальные каталоги</h3>
      <CatalogDetailHeader detailData={detailData}/>
      <CatalogDetailTable detailData={tableData}/>
    </section>
  )
}