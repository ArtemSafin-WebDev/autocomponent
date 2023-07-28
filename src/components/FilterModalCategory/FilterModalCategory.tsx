"use client"

import {useEffect, useState} from "react";
import styles from "./filterModalCategory.module.scss"
import "./style.scss"

import InputSearch from "@/components/InputSearch/InputSearch";
import loop from "@/assets/images/loop.svg"
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {data} from "@/components/FilterModalCategory/data";
import {useFilterCategory} from "@/store/useFilterCategory";
import {shallow} from "zustand/shallow";

const nodes = [{
  value: 'tires',
  label: 'Шины, диски, колпаки',
  children: [
    { value: 'Колеса в сборе', label: 'Колеса в сборе' },
    { value: 'Материалы для шиномонтажа', label: 'Материалы для шиномонтажа' },
    { value: 'Колесный крепёж, метизы', label: 'Колесный крепёж, метизы' },
    { value: 'Колпаки', label: 'Колпаки', children: [
        { value: 'R13', label: 'R13' },
        { value: 'R14', label: 'R14' }
    ]}],

}];


export default function FilterModalCategory() {
  const [categoryVal, setCategoryVal] = useState<string>("")
  const [expanded, setExpanded] = useState([])
  const {setChecked, checked} = useFilterCategory((state) =>
    ({setChecked: state.setChecked, checked: state.checked}), shallow)
  
  return (
    <>
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
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked: any) => setChecked(checked)}
        onExpand={(expanded: any) => setExpanded(expanded)}
      />
    </>
  )
}