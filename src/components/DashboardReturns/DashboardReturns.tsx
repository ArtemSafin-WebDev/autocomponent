import { useId, useState } from "react";
import styles from "./dashboardReturns.module.scss";
import DashboardReturnsCard, {
  DashboardReturnsCardProps,
} from "../DashboardReturnsCard/DashboardReturnsCard";

enum DashboardReturnsMode {
  Docs = "Накладные",
  History = "История возвратов",
}

const items: DashboardReturnsCardProps[] = [
  {
    title: "Накладная: 3931536 от 18.10.2022",
    amount: "125 713,20 ₽",
    items: [
      {
        id: 1,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: false,
      },
      {
        id: 2,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: false,
      },
      {
        id: 3,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: true,
      },
    ],
  },
  {
    title: "Накладная: 3931536 от 18.10.2022",
    amount: "125 713,20 ₽",
    items: [
      {
        id: 1,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: false,
      },
      {
        id: 2,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: false,
      },
      {
        id: 3,
        title:
          "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
        art: "12961llecob2",
        code: "1062067",
        brand: "Kolbenschmidt",
        quantity: 1,
        price: "2 993",
        amount: "2 993",
        returned: true,
      },
    ],
  },
];

export default function DashboardReturns() {
  const numberId = useId();
  const artId = useId();
  const nameId = useId();
  const [mode, setMode] = useState<DashboardReturnsMode>(
    DashboardReturnsMode.Docs
  );

  const [number, setNumber] = useState("");
  const [productCode, setProductCode] = useState("");
  const [name, setName] = useState("");
  return (
    <div className={styles.dashboardReturns}>
      <div className={styles.filters}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={numberId}>
            Номер накладной
          </label>
          <input
            className={styles.input}
            id={numberId}
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={artId}>
            Артикул товара
          </label>
          <input
            className={styles.input}
            id={artId}
            value={productCode}
            onChange={(event) => setProductCode(event.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={nameId}>
            Наименование товара
          </label>
          <input
            className={styles.input}
            id={nameId}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button className={styles.showBtn}>Показать</button>
        <button
          className={styles.outlineBtn}
          onClick={() => {
            setName("");
            setProductCode("");
            setNumber("");
          }}
        >
          Сбросить
        </button>
        <div className={styles.modeSelectors}>
          <button
            className={`${styles.modeSelector} ${
              mode === DashboardReturnsMode.Docs
                ? styles.modeSelectorActive
                : ""
            }`}
            onClick={() => setMode(DashboardReturnsMode.Docs)}
          >
            Накладные
          </button>
          <button
            className={`${styles.modeSelector} ${
              mode === DashboardReturnsMode.History
                ? styles.modeSelectorActive
                : ""
            }`}
            onClick={() => setMode(DashboardReturnsMode.History)}
          >
            История возвратов
          </button>
        </div>
      </div>
      <div className={styles.items}>
        {items.map((item, itemIndex) => (
          <div className={styles.item} key={itemIndex}>
            <DashboardReturnsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
