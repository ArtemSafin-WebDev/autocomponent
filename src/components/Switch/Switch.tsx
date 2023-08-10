"use client"

import styles from "./switch.module.scss"
import {Dispatch, SetStateAction} from "react";

export default function Switch({isActive, setIsActive}: any) {
  return (
    <>
      <button onClick={() => setIsActive((prevVal: boolean) => !prevVal)} className={styles.switch}>
        <span
          className={isActive ? styles.switch__circle_active : styles.switch__circle}
        ></span>
      </button>
    </>
  )
}
