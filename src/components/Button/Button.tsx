"use client"

import styles from "./button.module.scss"
import Image from "next/image";
import {TItemsTypes} from "@/types/api";

interface IStorageBtn {
  text?: string;
  icon?: HTMLImageElement;
  isActive?: boolean;
  type?: TItemsTypes;
  handlerFilterClick?: any;
  style?: {[keyof: string]: string};
  handlerClick?: any;
}

export default function Button({text, icon, type, handlerFilterClick, handlerClick, style, isActive = false,}: IStorageBtn) {
  return (
    <>
      <button
          className={isActive ? styles.btn_active : styles.btn}
          onClick={() => {
            handlerFilterClick && handlerFilterClick(type)
            handlerClick && handlerClick()
          }}
          style={style}>
        {icon && <Image src={icon} alt="icon" className={styles.btn__icon}/>}
        {text && <span>{text}</span>}
      </button>
    </>
  )
}
