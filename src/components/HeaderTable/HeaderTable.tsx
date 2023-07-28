"use client"

import styles from "./headerTable.module.scss"
import EmbedSVG from "@/components/utils/EmbedSVG/EmbedSVG";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";
import info from "@/assets/images/info.svg";
import Image from "next/image";

export default function HeaderTable() {
  return (
    <header className={styles.headerTable}>
      <div className={styles.headerTable__container}>
        <div className={styles.headerTable__block}>
          <button className={styles.headerTable__info}>
            <span>Наименование</span>
            <EmbedSVG src={arrowDown.src} />
          </button>
          <input type="text" className={`${styles.headerTable__input} ${styles.headerTable__input_first}`} />
        </div>
        <div className={styles.headerTable__block}>
          <button className={styles.headerTable__info}>
            <span>OEM/Арт. производителя</span>
            <EmbedSVG src={arrowDown.src} />
          </button>
          <input type="text" className={`${styles.headerTable__input} ${styles.headerTable__input_second}`}/>
        </div>
        <div className={styles.headerTable__block}>
          <p className={styles.headerTable__info}>Код</p>
          <input type="text" className={`${styles.headerTable__input} ${styles.headerTable__input_third}`}/>
        </div>
        <button className={styles.headerTable__info}>
          <span>Производитель</span>
          <EmbedSVG src={arrowDown.src} />
        </button>
        <p className={styles.headerTable__info}>
          <span>Срок поставки</span>
          <Image src={info} alt="image" className={styles.headerTable__image}/>
        </p>
        <p className={styles.headerTable__info}>Остаток</p>
        <button className={styles.headerTable__info}>
          <span>Цена, ₽</span>
          <EmbedSVG src={arrowDown.src} />
          <Image src={info} alt="image" className={styles.headerTable__image}/>
        </button>
        <div></div>
      </div>
    </header>
  )
}