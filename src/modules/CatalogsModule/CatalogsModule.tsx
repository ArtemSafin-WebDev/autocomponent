"use client"
import {useEffect, useState} from "react";
import styles from "./catalogs.module.scss"
import CatalogHeader from "@/components/CatalogHeader/CatalogHeader";
import CatalogTable from "@/components/CatalogTable/CatalogTable";
import useFindItem from "@/hooks/useFindItem";
import {data} from "./data"

export default function CatalogsModule() {
  const [headerVal, setHeaderVal] = useState<string>("")
  const [nameCar, setNameCar] = useState<string>("")
  const [crnData, setCrnData] = useState<any>([])

  useEffect(() => {
    setCrnData(data)
  }, [data, setCrnData])

  return (
    <div className={styles.catalogs}>
      <h3 className={styles.catalogs__title}>Оригинальные каталоги</h3>
      <CatalogHeader inputValue={headerVal} handleOnChange={setHeaderVal}/>
      <CatalogTable inputValue={nameCar} handleOnChange={setNameCar} data={data}/>
    </div>
  )
}
