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
  data: any
}

export default function CatalogTable({inputValue, handleOnChange, data}: ICatalogTable) {
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
          <CatalogLinks title={"Каталоги для иномарок"} data={filterData}/>
          {/*<CatalogLinks title={"Каталоги для отечественных автомобилей"} data={data} type={"domestic"}/>*/}
          {/*<CatalogLinks title={"Двигатели"} data={data} type={"engine"}/>*/}
        </div>
    </div>
  )
}