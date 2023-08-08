"use client"
import styles from "./CatalogDetail.module.scss"
import Image from "next/image";
import Tooltip from "@/components/Tooltip/Tooltip";
import arrowDown from "@/assets/images/arrow-down.svg";
import Widget from "@/components/Widget/Widget";

interface ICatalogDetailHeader {
  detailData: any
}

export default function CatalogDetailHeader({detailData}: ICatalogDetailHeader) {
  return (
    <header className={styles.catalogHeader}>
      <div className={styles.catalogHeader__container}>
        <ul className={styles.catalogHeader__filters}>
          <li>
            <Widget widgetData={detailData} field={"country"} title={"Рынок"}/>
          </li>
        </ul>
      </div>
    </header>
  )
}