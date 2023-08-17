"use client"
import styles from "./pagiation.module.scss"
import {useState} from "react";
import Image from "next/image";
import backArrow from "@/assets/images/back-arrow.svg"

export default function Pagination() {
  const [crnPage, setCrnPage] = useState<number>(1)
  return (
    <div className={styles.pagination}>
      {[...Array(6)].map((_, idx) => (
        <button
          key={idx}
          className={crnPage === idx + 1 ? styles.pagination__btn_active : styles.pagination__btn}
          onClick={() => setCrnPage(idx + 1)}
        >{idx + 1}</button>
      ))}
      <button className={styles.pagination__imageBtn}>
        <Image src={backArrow} alt={"icon"} className={styles.pagination__image}/>
      </button>
    </div>
  )
}