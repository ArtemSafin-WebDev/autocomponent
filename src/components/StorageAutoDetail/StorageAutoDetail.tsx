"use client"

import {useState} from "react"
import styles from "./StorageAutoDetail.module.scss"
import DropDown from "@/components/DropDown/DropDown";
import Checkbox from "@/components/Checkbox/Checkbox";
import {RadioGroup, Flex, Text} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

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
  zIndex: "10",
}

export default function StorageParametersDetail() {
  const [isChecked, setIsChecked] = useState("")

  return (
    <div className={styles.parameters}>
      <div className={styles.parameters__container}>
        <ul className={styles.parameters__filters}>
          <li className={styles.parameters__filter}>
            <DropDown
              dropDownValues={["Выберите марку", "Ширина шин, мм", "Ширина ши, мм"]}
              activeIndexValue={1}
              buttonStyle={buttonStyle}
              dropDownStyle={dropDownStyle}
            />
            <DropDown
              dropDownValues={["Выберите модель", "10%", "20%"]}
              activeIndexValue={1}
              buttonStyle={buttonStyle}
              dropDownStyle={dropDownStyle}
            />
            <DropDown
              dropDownValues={["Выберите год", "R 15", "12", "13", "14", "R 15"]}
              activeIndexValue={1}
              buttonStyle={buttonStyle}
              dropDownStyle={dropDownStyle}
            />
            <DropDown
              dropDownValues={["Выберите модификацию", "R 15", "12", "13", "14", "R 15"]}
              activeIndexValue={1}
              buttonStyle={buttonStyle}
              dropDownStyle={dropDownStyle}
            />
          </li>
          <li className={styles.parameters__filter}>
            <h5 className={styles.parameters__title}>Сезонность</h5>
            <Checkbox title={"Лето"} onToggle={() => setIsChecked}/>
            <Checkbox title={"Зима"} onToggle={() => setIsChecked}/>
            <Checkbox title={"Всесезонная"} onToggle={() => setIsChecked}/>
          </li>
          <li className={styles.parameters__filter}>
            <h5 className={styles.parameters_title}>Автомобиль</h5>
            <Checkbox title={"Легкогрузовые микроавтобусы"} onToggle={() => setIsChecked}/>
            <Checkbox title={"Легковые"} onToggle={() => setIsChecked}/>
            <Checkbox title={"Внедорожники и кроссоверы"} onToggle={() => setIsChecked}/>
          </li>
          <li className={styles.parameters__filter}>
            <h5 className={styles.parameters__title}>Количество</h5>
            <RadioGroup.Root>
              <Flex gap="1" direction="column">
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="1" />
                    <Text size="2">Любое</Text>
                  </Flex>
                </label>
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="2" />
                    <Text size="2">Комплект (4 шт)</Text>
                  </Flex>
                </label>
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="3" />
                    <Text size="2">Пара (2 шт)</Text>
                  </Flex>
                </label>
              </Flex>
            </RadioGroup.Root>
          </li>
          <li className={styles.parameters__filter}>
            <h5 className={styles.parameters__title}>Шипы</h5>
            <RadioGroup.Root>
              <Flex gap="1" direction="column">
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="1" />
                    <Text size="2">Все</Text>
                  </Flex>
                </label>
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="2" />
                    <Text size="2">Шипованные</Text>
                  </Flex>
                </label>
                <label>
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="3" />
                    <Text size="2">Нешипованные</Text>
                  </Flex>
                </label>
              </Flex>
            </RadioGroup.Root>
          </li>
          <li className={styles.parameters__filter}>
            <h5 className={styles.parameters__title}>Размеры для выбранного авто</h5>
            <div className={styles.parameters__checkboxContainer}>
              {[...Array(12)].map((_, index) => (
                <Checkbox title={"175/60 R15"} key={index}/>
              ))}
            </div>
          </li>
        </ul>
        <div className={styles.parameters__buttons}>
          <button className={styles.parameters__reset}>Сбросить</button>
          <button className={styles.parameters__find}>Подобрать</button>
        </div>
      </div>
    </div>
  )
}