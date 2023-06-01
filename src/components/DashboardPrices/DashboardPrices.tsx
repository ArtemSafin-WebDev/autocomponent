import { useState } from "react";
import styles from "./dashboardPrices.module.scss";
import DashboardPricesItem, {
  DashboardPricesItemMode,
  DashboardPricesItemProps,
} from "../DashboardPricesItem/DashboardPricesItem";

enum MarginStatus {
  Both = "Обе цены",
  WithMargin = "Только с наценкой",
  WithoutMargin = "Только без наценки",
}

const items: DashboardPricesItemProps[] = [
  {
    id: 1,
    price: "До 100 ₽",
    initialMargin: 50,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 2,
    price: "100 – 500 ₽",
    initialMargin: 100,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 3,
    price: "500 – 1 000 ₽",
    initialMargin: 5,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 4,
    price: "1 000 – 3 000 ₽",
    initialMargin: 50,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 5,
    price: "3 000 – 5 000 ₽",
    initialMargin: 200,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 6,
    price: "5 000 – 10 000 ₽",
    initialMargin: 50,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 7,
    price: "10 000 – 15 000 ₽",
    initialMargin: 50,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 8,
    price: "15 000 – 50 000 ₽",
    initialMargin: 1000,
    initialMode: DashboardPricesItemMode.Fixed,
  },
  {
    id: 9,
    price: "Более 50 000 ₽",
    initialMargin: 50,
    initialMode: DashboardPricesItemMode.Fixed,
  },
];

export default function DashboardPrices() {
  const [marginModule, setMarginModule] = useState(true);
  const [marginStatus, setMarginStatus] = useState<MarginStatus>(
    MarginStatus.Both
  );

  return (
    <div className={styles.dashboardPrices}>
      <div className={styles.filters}>
        <div className={styles.filtersBlock}>
          <h3 className={styles.filtersTitle}>Модуль наценок</h3>
          <div className={styles.checkboxes}>
            <button
              className={styles.checkbox}
              onClick={() => setMarginModule(true)}
            >
              <span
                className={`${styles.mark} ${
                  marginModule ? styles.markChecked : ""
                }`}
              ></span>
              <span className={styles.checkboxText}>Включён</span>
            </button>
            <button
              className={styles.checkbox}
              onClick={() => setMarginModule(false)}
            >
              <span
                className={`${styles.mark} ${
                  !marginModule ? styles.markChecked : ""
                }`}
              ></span>
              <span className={styles.checkboxText}>Выключен</span>
            </button>
          </div>
        </div>
        <div className={styles.filtersBlock}>
          <h3 className={styles.filtersTitle}>Показывать цены</h3>
          <div className={styles.checkboxes}>
            <button
              className={styles.checkbox}
              onClick={() => setMarginStatus(MarginStatus.Both)}
            >
              <span
                className={`${styles.mark} ${
                  marginStatus === MarginStatus.Both ? styles.markChecked : ""
                }`}
              ></span>
              <span className={styles.checkboxText}>Обе цены</span>
            </button>
            <button
              className={styles.checkbox}
              onClick={() => setMarginStatus(MarginStatus.WithMargin)}
            >
              <span
                className={`${styles.mark} ${
                  marginStatus === MarginStatus.WithMargin
                    ? styles.markChecked
                    : ""
                }`}
              ></span>
              <span className={styles.checkboxText}>Только с наценкой</span>
            </button>
            <button
              className={styles.checkbox}
              onClick={() => setMarginStatus(MarginStatus.WithoutMargin)}
            >
              <span
                className={`${styles.mark} ${
                  marginStatus === MarginStatus.WithoutMargin
                    ? styles.markChecked
                    : ""
                }`}
              ></span>
              <span className={styles.checkboxText}>Только без наценки</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.pricesTable}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderTitle}>Стоимость товара</div>
          <div className={styles.tableHeaderTitle}>Наценка</div>
        </div>
        <div className={styles.tableItems}>
          {items.map((item) => (
            <DashboardPricesItem {...item} />
          ))}
        </div>
        <button className={styles.saveBtn}>Сохранить</button>
      </div>
    </div>
  );
}
