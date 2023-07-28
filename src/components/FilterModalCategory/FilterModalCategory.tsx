"use client"

import {useEffect, useState} from "react";
import styles from "./filterModalCategory.module.scss"

import InputSearch from "@/components/InputSearch/InputSearch";
import loop from "@/assets/images/loop.svg"
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {data} from "@/components/FilterModalCategory/data";

const nodes = [{
  value: 'mars',
  label: 'Mars',
  children: [
    { value: 'phobos', label: 'Phobos' },
    { value: 'deimos', label: 'Deimos' },
  ],
}];


export default function FilterModalCategory() {
  const [categoryVal, setCategoryVal] = useState<string>("")
  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])

  // @ts-ignore
  return (
    <CheckboxTree
      icons={{
        check: <span className="rct-icon rct-icon-check" />,
        uncheck: <span className="rct-icon rct-icon-uncheck" />,
        halfCheck: <span className="rct-icon rct-icon-half-check" />,
        expandClose: <span className="rct-icon rct-icon-expand-close" />,
        expandOpen: <span className="rct-icon rct-icon-expand-open" />,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
        parentClose: <span className=""/>,
        parentOpen: <span className="rct-icon rct-icon-parent-open" />,
        leaf: <span className="rct-icon rct-icon-leaf" />,
      }}
      nodes={nodes}
      checked={checked}
      expanded={expanded}
      onCheck={(checked: any) => setChecked(checked)}
      onExpand={(expanded: any) => setExpanded(expanded)}
    />
  )
}