"use client"

import styles from "./filterModalManuf.module.scss"
import {TData} from "./data"
import Checkbox from "@/components/CheckboxFilters/CheckboxFilters";
import InputSearch from "@/components/InputSearch/InputSearch";
import {useCheckboxFilter} from "@/store/useCheckboxFilter";
import loop from "@/assets/images/loop.svg"
import {shallow} from "zustand/shallow";
import {useFilterCategory} from "@/store/useFilterCategory";
import {useFilterManuf} from "@/store/useFilterManuf";

export default function FilterModalManuf() {
  const {updateCkeckedStatus} = useCheckboxFilter((state: any) =>
    ({updateCkeckedStatus: state.updateCkeckedStatus}), shallow)
  const {getInputValue, inputValue} = useFilterCategory()
  const {manuf, manufVal} = useFilterManuf()

  return (
    <div className={styles.manuf}>
      <h5 className={styles.manuf__title}>Производитель</h5>
      <InputSearch
        value={inputValue}
        handlerChange={(evt: any) => {
          getInputValue(evt.target.value)
        }}
        placeHolder={"Поиск производителя"}
        icon={loop}
      />
      <div className={styles.manuf__checkboxes}>
        <div className={styles.manuf__checkboxesWrapper}>
          {manuf?.map((checkbox: TData) => (
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