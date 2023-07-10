import Link from "next/link";
import styles from "./cartSuccess.module.scss";

interface CartSuccessItem {
  id: number;
  title: string;
  price: string;
  amount: string;
  weight: string;
  price2: string;
}

const items: CartSuccessItem[] = [
  {
    id: 1,
    title: "Шина зимняя Yokohama iceGuard Stud iG65 255/55 R18 109T шип",
    weight: "16.4 кг",
    price: "8 526,12 ₽",
    amount: "1 шт",
    price2: "8 526,12 ₽",
  },
  {
    id: 2,
    title: "Alcasta M02 5.5x14/4x100 ET49 D60.1 GMF [9108184]",
    weight: "6.2 кг",
    price: "413,82 ₽",
    amount: "1 шт",
    price2: "413,82 ₽",
  },
  {
    id: 3,
    title:
      "Bluetooth-адаптер для AUX AURA (ABT-903R) красный/3,5mm jack/аккуму...",
    weight: "0 кг",
    price: "413,82 ₽",
    amount: "1 шт",
    price2: "413,82 ₽",
  },
  {
    id: 4,
    title:
      "Cайлентблок передней (подвески, нижнего рычага) задний полиуретано...",
    weight: "1 кг",
    price: "1 371,36 ₽",
    amount: "1 шт",
    price2: "1 371,36 ₽",
  },
];

export default function CartSuccess() {
  return (
    <div className={styles.cartSuccess}>
      <div className={styles.innerContent}>
        <h1 className={styles.heading}>
          Заказ <em>OPT-69946</em> успешно оформлен!
        </h1>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.infoItemKey}>Способ получения:</div>
            <div className={styles.infoItemValue}>Самовывоз</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoItemKey}>Дата доставки:</div>
            <div className={styles.infoItemValue}>02.02.2023</div>
          </div>
        </div>
        <table className={styles.table}>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{item.weight}</td>
                <td>{item.price2}</td>
              </tr>
            ))}
            <tr className={styles.total}>
              <td>Итого:</td>
              <td>23.8 кг</td>
              <td></td>
              <td>4 шт</td>
              <td>13 073,88 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href="/dashboard" className={styles.link}>
        Перейти в личный кабинет
      </Link>
    </div>
  );
}
