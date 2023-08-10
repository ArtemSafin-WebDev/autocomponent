"use client"

import {ChangeEvent} from "react";
import styles from "./headerTable.module.scss"
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import Tooltip from "@/components/Tooltip/Tooltip";
import {AnimatePresence, motion} from "framer-motion";

export default function HeaderTable({
  tableVal,
  setTableVal,
  infoVal,
  setInfoVal,
  oemVal,
  setOemVal,
  codeVal,
  setCodeVal
}: any) {

  const handleClick = (prevVal: {[keyof: string]: boolean}, crnKey: string, key: boolean) => {
    return Object.keys(prevVal).reduce((result, k) =>  ({ ...result, [k]: (crnKey === k && !key)}), {})
  }

  return (
    <AnimatePresence>
      <header className={styles.headerTable}>
        <div className={styles.headerTable__container}>
          <div className={styles.headerTable__block}>
            <button className={styles.headerTable__info} onClick={() => setTableVal((prevVal: {[keyof: string]: boolean}) => handleClick(prevVal, "title", prevVal.title))}>
              <span>Наименование</span>
              <motion.img
                className={styles.headerTable__icon}
                src={arrowDown.src}
                animate={{
                  rotate: tableVal?.title ? 180 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40
                }}
              />
            </button>
            <input
              type="text"
              className={`${styles.headerTable__input} ${styles.headerTable__input_first}`}
              value={infoVal}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setInfoVal(evt.target.value)}
            />
          </div>
          <div className={styles.headerTable__block}>
            <button className={styles.headerTable__info} onClick={() => setTableVal((prevVal: {[keyof: string]: boolean}) => handleClick(prevVal, "oem", prevVal.oem))}>
              <span>OEM/Арт. производителя</span>
              <motion.img
                className={styles.headerTable__icon}
                src={arrowDown.src}
                animate={{
                  rotate: tableVal?.oem ? 180 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40
                }}
              />
            </button>
            <input
              type="text"
              value={oemVal}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setOemVal(evt.target.value)}
              className={`${styles.headerTable__input} ${styles.headerTable__input_second}`}/>
          </div>
          <div className={styles.headerTable__block}>
            <p className={styles.headerTable__info}>Код</p>
            <input
              type="text"
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setCodeVal(evt.target.value)}
              value={codeVal}
              className={`${styles.headerTable__input} ${styles.headerTable__input_third}`}/>
          </div>
          <button className={styles.headerTable__info} onClick={() => setTableVal((prevVal: {[keyof: string]: boolean}) => handleClick(prevVal, "manuf", prevVal.manuf))}>
            <span>Производитель</span>
            <motion.img
              className={styles.headerTable__icon}
              src={arrowDown.src}
              animate={{
                rotate: tableVal?.manuf ? 180 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40
              }}
            />
          </button>
          <p className={styles.headerTable__info}>
            <span>Срок поставки</span>
            <Tooltip text={"какой то текст"}/>
          </p>
          <p className={styles.headerTable__info}>Остаток</p>
          <button className={styles.headerTable__info} onClick={() => setTableVal((prevVal: {[keyof: string]: boolean}) => handleClick(prevVal, "cost", prevVal.cost))}>
            <span>Цена, ₽</span>
            <motion.img
              className={styles.headerTable__icon}
              src={arrowDown.src}
              animate={{
                rotate: tableVal?.cost ? 180 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40
              }}
            />
            <Tooltip text={"какой то текст"}/>
          </button>
          <div></div>
        </div>
      </header>
    </AnimatePresence>
  )
}