"use client"
import styles from "./CatalogDetail.module.scss"
import Image from "next/image";
import Tooltip from "@/components/Tooltip/Tooltip";
import arrowDown from "@/assets/images/arrow-down.svg";
import Widget from "@/components/Widget/Widget";

interface ICatalogDetailHeader {
  detailData: any
}
import DropDown from "@/components/DropDown/DropDown";

const buttonStyle = {
  width: "28rem",
  height: "4rem",
  backgroundColor: "white",
  borderRadius: ".4rem",
  padding: "0 2rem",
  border: "0.1px solid #D6DCE5",
  display: "flex",
  justifyContent: "space-between",
}
const dropDownStyle = {
  top: "5rem",
  width: "28rem",
  zIndex: "10"
}

export default function CatalogDetailHeader({detailData}: ICatalogDetailHeader) {
  return (
    <header className={styles.catalogHeader}>
      <div className={styles.catalogHeader__container}>
        <ul className={styles.catalogHeader__filters}>
          <li>
            <h2>Рынок</h2>
            <DropDown dropDownValues={["США", "РОССИЯ"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
          <li>
            <h2>Модель</h2>
            <DropDown dropDownValues={["AUDI", "TOYOTA"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
          <li>
            <h2>Год выпуска</h2>
            <DropDown dropDownValues={["2019", "2022"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
          <li>
            <h2>Рынок</h2>
            <DropDown dropDownValues={["США", "РОССИЯ"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
          <li>
            <h2>Торговое обозначение</h2>
            <DropDown dropDownValues={["2019", "2022"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>

          </li>
          <li>
            <h2>Двигатель</h2>
            <DropDown dropDownValues={["2019", "2022"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
          <li>
            <h2>Трансмиссия</h2>
            <DropDown dropDownValues={["2019", "2022"]} activeIndexValue={0} buttonStyle={buttonStyle} dropDownStyle={dropDownStyle}/>
          </li>
        </ul>
      </div>
    </header>
  )
}