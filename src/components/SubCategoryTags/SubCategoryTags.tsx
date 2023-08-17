"use client"
import styles from "./SubCategory.module.scss"
import {Dispatch, SetStateAction} from "react";

const data: {[keyof: string]: string}[] = [
  {text: "Генераторы и стартеры"},
  {text: "Двигатель"},
  {text: "Кузов"},
  {text: "Отопление, вентиляция и омыватели"},
  {text: "Подвеска двигателя"},
  {text: "Отопление, вентиляция и омыватели C"},
  {text: "Двигатель M"},
  {text: "Кузов тачки M"},
  {text: "Двигатель R"},
  {text: "Генераторы и стартеры M"},
  {text: "Отопление, вентиляция и омыватели S"},
  {text: "Кузов V"},
  {text: "Отопление, вентиляция и омыватели P"},
  {text: "Двигатель L"},
  {text: "Подвеска двигателя Q"}
]

interface ISubCategoryTags {
  handleClick: Dispatch<SetStateAction<string>>
  value: string
}

export default function SubCategoryTags({value, handleClick}: ISubCategoryTags) {
  return (
    <div className={styles.tags}>
      <div className={styles.tags__container}>
        {data?.map((tag, idx) => (
          <button
            key={idx}
            className={value === tag.text ? styles.tags__btn_active : styles.tags__btn}
            onClick={() => handleClick(tag?.text)}
          >{tag?.text}</button>
        ))}
      </div>
    </div>
  )
}