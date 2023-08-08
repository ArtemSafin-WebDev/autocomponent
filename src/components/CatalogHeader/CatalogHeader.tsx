"use client"

import styles from "./catalogHeader.module.scss"
import InputSearch from "@/components/InputSearch/InputSearch";
import Button from "@/components/Button/Button";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";

interface ICatalogHeader {
  handleOnChange: Dispatch<SetStateAction<string>>;
  inputValue: string;
}

const inputStyle = {
  "width": "43.8rem",
  "height": "4.6rem",
  "padding": "0 2rem",
  "marginRight": "0",
  "maxWidth": "100%",
  "backgroundColor": "white"
}

const btnStyle = {
  "color": "white",
  "width": "18.4rem",
  "backgroundColor": "#268AE5",
}

export default function CatalogHeader ({inputValue, handleOnChange}: ICatalogHeader) {
  return (
    <header className={styles.catalog}>
      <h5 className={styles.catalog__title}>Найти автомобиль по VIN-номеру или номеру кузова:</h5>
      <div className={styles.catalog__block}>
        <InputSearch
          handlerChange={(evt: ChangeEvent<HTMLInputElement>) => handleOnChange(evt.target.value)}
          value={inputValue}
          style={inputStyle}
          placeHolder={""}
        />
        <Button
          text={"Найти запчасть"}
          style={btnStyle}/>
      </div>
      <div className={styles.catalog__bottom}>
        <p>Пример VIN-запроса: WF0EXXGCDE7580518</p>
        <p>Пример номера кузова: sxa110207352</p>
      </div>
    </header>
  );
};


