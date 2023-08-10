"use client"
import {useState} from "react";
import styles from "./catalogTable.module.scss"
import InputSearch from "@/components/InputSearch/InputSearch";
import {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import CatalogLinks from "@/components/CatalogLinks/CatalogLinks";
import loop from "@/assets/images/loop.svg"

interface ICatalogTable {
  handleOnChange: Dispatch<SetStateAction<string>>;
  inputValue: string;
  filteredData: any
}

export default function CatalogTable({inputValue, handleOnChange, filteredData}: ICatalogTable) {
  const [searchData, setSearchData] = useState<any>([])

  useEffect(() => {
    let map = new Map()
    let finalFilteredData: any = []
    filteredData.map((item: any) => {
      Object.entries((item)).map((value: any) => {
        finalFilteredData = map.set(value[0], value[1].filter((crnBlock: any) => crnBlock.name.toLowerCase().includes(inputValue.toLowerCase())))
      })
    })
    setSearchData(Array.from(finalFilteredData, ([key, value]) => ({ [key]: value,})))
  }, [filteredData, setSearchData, inputValue])

  return (
    <div className={styles.catalogTable}>
      <div className={styles.catalogTable__inputWrapper}>
        <InputSearch
          handlerChange={(evt: ChangeEvent<HTMLInputElement>) => handleOnChange(evt.target.value)}
          value={inputValue}
          placeHolder={"Введите название автомобиля"}
          icon={loop}
        />
      </div>
        <div className={styles.catalogTable__table}>
          <CatalogLinks title={"Каталоги для иномарок"} data={searchData} type={"foreign"}/>
          <CatalogLinks title={"Каталоги для отечественных автомобилей"} data={searchData} type={"domestic"}/>
          <CatalogLinks title={"Двигатели"} data={searchData} type={"engine"}/>
        </div>
    </div>
  )
}