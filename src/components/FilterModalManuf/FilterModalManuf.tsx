"use client"

import {useCallback, useEffect, useState} from "react";
import styles from "./filterModalManuf.module.scss"
import {data, TData} from "./data"
import Checkbox from "@/components/CheckboxFilters/CheckboxFilters";
import useFindItem from "@/hooks/useFindItem";
import InputSearch from "@/components/InputSearch/InputSearch";
import {useCheckboxFilter} from "@/store/useCheckboxFilter";
import loop from "@/assets/images/loop.svg"
import {shallow} from "zustand/shallow";
import {useFilterCategory} from "@/store/useFilterCategory";

export default function FilterModalManuf() {
  const [manufVal, setManufVal] = useState<string>("")
  const {finalArr} = useFindItem({data, field: "text", condition: manufVal})

  const {manufCheckbox, updateCkeckedStatus, setManufCheckbox} = useCheckboxFilter((state: any) =>
    ({manufCheckbox: state.manufCheckbox, updateCkeckedStatus: state.updateCkeckedStatus, setManufCheckbox: state.setManufCheckbox}), shallow)

  useEffect(() => {
    setManufCheckbox(finalArr)
  }, [setManufCheckbox, finalArr])

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
          {manufCheckbox?.map((checkbox: TData) => (
            <Checkbox
              title={checkbox.text}
              key={checkbox.id}
              idx={checkbox.id}
              updateStatus={updateCkeckedStatus}
              isChecked={checkbox.checked}
            />
          ))}
        </div>
      </div>
    </div>
  )
}