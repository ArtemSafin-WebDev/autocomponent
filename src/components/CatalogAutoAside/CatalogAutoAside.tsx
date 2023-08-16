"use client"

import "./style.scss"
import Image from "next/image";
import styles from "./catalog.module.scss"
import {ChangeEvent, useState} from "react";
import InputSearch from "@/components/InputSearch/InputSearch";
import loop from "@/assets/images/loop.svg"
import structure from "@/assets/images/structure.png"
import CheckboxTree from "react-checkbox-tree";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ChangeHandler} from "react-hook-form";

const nodes = [
  {value: 'Детали для ТО', label: 'Детали для ТО', children: [
      {value: "Двигатель1.5", label: "Двигатель1.5"},
    ]},
  {value: "Двигатель", label: "Двигатель", children: [
      {value: "Двигатель2", label: "Двигатель2"},
    ]},
  {value: "Топливная система", label: "Топливная система", children: [
      {value: "Топливная система1", label: "Топливная система1"},
    ]},
  {value: "Система охлаждения", label: "Система охлаждения", children: [
      {value: "Система охлаждения1", label: "Система охлаждения1"}
    ]},
  {value: "Cистема выпуска", label: "Система выпуска", children: [
          {value: "Нейтрализация ог", label: "Нейтрализация ог", children: [
              {value: "Рециркуляция ог", label: "Рециркуляция ог", children: [
                  {value: "Клапан системы рециркуляции ог (egr)", label: "Клапан системы рециркуляции ог (egr)"},
                  {value: "Рециркуляция ог, управление ог", label: "Рециркуляция ог, управление ог"},
                  {value: "Преобразователь давления", label: "Преобразователь давления"},
                ]},
              {value: "Глушитель в сборе", label: "Глушитель в сборе"},
              {value: "Катализатор", label: "Катализатор"},
              {value: "Датчик кислорода", label: "Датчик кислорода"},
            ]},
        ]},
  {value: "Трансмиссия", label: "Трансмиссия", children: [
      {value: "Трансмиссия1", label: "Трансмиссия1"}
    ]},
  {value: "Ходовая часть", label: "Ходовая часть", children: [
      {value: "Ходовая часть1", label: "Ходовая часть1"}
    ]},
  {value: "Отопление / кондиционирования", label: "Отопление / кондиционирования", children: [
      {value: "Отопление / кондиционирования1", label: "Отопление / кондиционирования1"}
    ]},
  {value: "Детали салона", label: "Детали салона", children: [
      {value: "Детали салона1", label: "Детали салона1"}
    ]},
  {value: "Детали кузова", label: "Детали кузова", children: [
      {value: "Детали салона2", label: "Детали салона2"}
    ]},
  {value: "Двигатель1", label: "Двигатель1", children: [
      {value: "Двигатель3", label: "Двигатель3"},
    ]},
]

export default function CatalogAutoAside() {
  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])
  const [inputVal, setInputVal] = useState<string>("")
  const [btnActive, isBtnActive] = useState<string>("Общий список")

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__container}>
        <div className={styles.aside__filters}>
          <div className={styles.aside__tabs}>
            <button
              className={btnActive === "Общий список" ? styles.aside__btnTab_active : styles.aside__btnTab}
              onClick={() => isBtnActive("Общий список")}
            >Общий список</button>
            <button
              className={btnActive === "От производителя" ? styles.aside__btnTab_active : styles.aside__btnTab}
              onClick={() => isBtnActive("От производителя")}
            >От производителя</button>
          </div>
          <InputSearch
            placeHolder={"Введите название запчасти"}
            value={inputVal}
            style={{
              "width": "34.5rem"
            }}
            handlerChange={(evt: ChangeEvent<HTMLInputElement>) => setInputVal(evt.target.value)}
            icon={loop}/>
          <div className={`${styles.aside__checkboxes} aside-auto`}>
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
          </div>
        </div>
      </div>
    </aside>
  )
}