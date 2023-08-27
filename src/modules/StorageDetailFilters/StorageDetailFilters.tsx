"use client"

import {useState} from "react"
import styles from "./StorageDetailFilters.module.scss"
import StorageParametersDetail from "@/components/StorageParametersDetail/StorageParametersDetail";
import StorageAutoDetail from "@/components/StorageAutoDetail/StorageAutoDetail";

export default function StorageDetailFilters() {
  const [activeTab, setTabActive] = useState<string>("По параметрам")

  return (
    <div className={styles.storageDetail}>
      <div className={styles.storageDetail__upper}>
        <button className={activeTab === "По параметрам" ? styles.storageDetail__button_active : styles.storageDetail__button} onClick={() => setTabActive("По параметрам")}>По параметрам</button>
        <button className={activeTab === "По авто" ? styles.storageDetail__button_active : styles.storageDetail__button} onClick={() => setTabActive("По авто")}>По авто</button>
      </div>
      {activeTab === "По параметрам" && <StorageParametersDetail/>}
      {activeTab === "По авто" && <StorageAutoDetail/>}
    </div>
  )
}
