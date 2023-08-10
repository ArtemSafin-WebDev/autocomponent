"use client"

import styles from "./filterModalManuf.module.scss"
import Checkbox from "@/components/CheckboxFilters/CheckboxFilters";
import InputSearch from "@/components/InputSearch/InputSearch";
import loop from "@/assets/images/loop.svg"
import {useFilterManuf} from "@/store/useFilterManuf";
import {ChangeEvent, useEffect, useState} from "react";
import {shallow} from "zustand/shallow";
import CheckboxTree from "react-checkbox-tree";
import {useFilterCategory} from "@/store/useFilterCategory";
import {data} from "@/modules/TableModule/data";
import "./style.scss"

export default function FilterModalManuf() {
  const [inputSearchVal, setInputSearchVal] = useState<string>("")
  const [checkboxData, setCheckboxData] = useState([])
  const [expanded, setExpanded] = useState([])
  const {checkedManufValues, setCheckedManufValues} = useFilterManuf()

  useEffect(() => {
    setCheckboxData(data.filter((item: any) => {
      return item.value.toLowerCase().trim().includes(inputSearchVal.toLowerCase().trim())
    }))
  }, [setCheckboxData, data, inputSearchVal])

  return (
    <div className={styles.manuf}>
      <h5 className={styles.manuf__title}>Производитель</h5>
      <InputSearch
        value={inputSearchVal!}
        handlerChange={(evt: ChangeEvent<HTMLInputElement>) => setInputSearchVal(evt.target.value)}
        placeHolder={"Поиск производителя"}
        icon={loop}
      />
      <div className={styles.manuf__checkboxes}>
        <div className={`${styles.manuf__checkboxesWrapper} checkbox-manuf-block`}>
          <CheckboxTree
            icons={{
              check: <span className="rct-icon rct-icon-check" />,
              uncheck: <span className="rct-icon rct-icon-uncheck" />,
              halfCheck: <span className="rct-icon rct-icon-half-check" />,
              expandClose: <span className="rct-icon rct-icon-expand-close" />,
              expandOpen: <span className="rct-icon rct-icon-expand-open" />,
              expandAll: <span className="rct-icon rct-icon-expand-all" />,
              collapseAll: <span className="" />,
              parentClose: <span className=""/>,
              parentOpen: <span className="" />,
              leaf: <span className="" />,
            }}
            nodes={checkboxData}
            checked={checkedManufValues}
            expanded={expanded}
            onCheck={(checked: any) => setCheckedManufValues(checked)}
            onExpand={(expanded: any) => setExpanded(expanded)}
          />
        </div>
      </div>
    </div>
  )
}