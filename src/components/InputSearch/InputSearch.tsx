"use client"

import styles from './InputSearch.module.scss'
import Image from "next/image";
interface IInputSearch {
  handlerChange: any;
  value: string;
  placeHolder?: string;
  type?: string;
  style?: {[keyof: string]: string};
  icon: string;
}

export default function InputSearch({
  handlerChange,
  value,
  placeHolder,
  type = "text",
  style,
  icon
  }: IInputSearch) {

  return (
    <div className={styles.inputWrapper}>
    {icon && <Image src={icon} alt={"icon"} className={styles.inputWrapper__icon}/>}
    <input
      type={type}
      value={value}
      onChange={handlerChange}
      placeholder={placeHolder}
      style={style}
      className={styles.inputWrapper__input}
    />
    </div>
  )
}