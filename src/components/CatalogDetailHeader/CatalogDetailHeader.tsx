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
            <h2>Рынок</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Модель</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Год выпуска</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Рынок</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Торговое обозначение</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Двигатель</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
          <li>
            <h2>Трансмиссия</h2>
            <div className={styles.catalogHeader__wrapper}>
              <Widget widgetData={detailData} field={"country"}/>
            </div>
            <input type="text" defaultValue={"США"} className={styles.catalogHeader__input}/>
          </li>
        </ul>
      </div>
    </header>
  )
}