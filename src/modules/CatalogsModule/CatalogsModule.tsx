"use client"
import {useEffect, useState} from "react";
import styles from "./catalogs.module.scss"
import CatalogHeader from "@/components/CatalogHeader/CatalogHeader";
import CatalogTable from "@/components/CatalogTable/CatalogTable";
import {data} from "./data"

export default function CatalogsModule() {
  const [headerVal, setHeaderVal] = useState<string>("")
  const [nameCar, setNameCar] = useState<string>("")
  const [filterData, setFilterData] = useState([])
  const [alphabet, setAlphabet] = useState<string[]>([	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])

  useEffect(() => {
    let finalData
    let map = new Map()
    let crnData = data.sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    alphabet.forEach((letter: string) => {
      finalData = map.set(letter, crnData.filter((item: any) =>
        item.name[0].toLowerCase() === letter.toLowerCase()))
    })
    // @ts-ignore
    setFilterData(Array.from(finalData, ([key, value]) => ({ [key]: value,})))
  }, [setFilterData, data])

  return (
    <div className={styles.catalogs}>
      <h3 className={styles.catalogs__title}>Оригинальные каталоги</h3>
      <CatalogHeader inputValue={headerVal} handleOnChange={setHeaderVal}/>
      <CatalogTable inputValue={nameCar} handleOnChange={setNameCar} filteredData={filterData}/>
    </div>
  )
}
