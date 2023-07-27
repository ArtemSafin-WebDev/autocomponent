"use client"

import {useState} from "react";
import styles from "./filterModalManuf.module.scss"
import Image from "next/image";
import {data, TData} from "./data"
import Checkbox from "@/components/Checkbox/Checkbox";
import useFindItem from "@/hooks/useFindItem";
import InputSearch from "@/components/InputSearch/InputSearch";
import loop from "@/assets/images/loop.svg"

export default function FilterModalManuf() {
  const [manufVal, setManufVal] = useState<string>("")
  const {finalArr} = useFindItem({data, field: "text", condition: manufVal})

  return (
    <div className={styles.manuf}>
      <h5 className={styles.manuf__title}>Производитель</h5>
        <InputSearch
          value={manufVal}
          handlerChange={(evt: any) => setManufVal(evt.target.value)}
          placeHolder={"Поиск производителя"}
          icon={loop}
        />
      <div className={styles.manuf__checkboxes}>
        <div className={styles.manuf__checkboxesWrapper}>
          {finalArr?.map((checkbox: TData) => (
            <Checkbox title={checkbox.text} key={checkbox.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}