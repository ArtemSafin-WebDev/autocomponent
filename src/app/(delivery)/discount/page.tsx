import styles from "./discount.module.scss";
import Image from "next/image";
import File from "@/icons/File";

export const metadata = {
  title: "Автокомпонент - Скидки",
  description: "",
};

export default function DeliveryPage() {
  return (
    <div className={styles.discount}>
      <h1 className={styles.heading}>Скидки при покупке автозапчастей</h1>
      <div className={styles.textContent}>
        Авто-компонент предлагает будущим клиентам по продаже автомобильных
        запчастей для ваз, газ и иномарок гибкую систему скидок. При работе
        с нами, вас обслуживает персональный менеджер, которые ответит
        на все интересующие вопросы и поможет оптимально выстроить весь процесс
        делового общения.
      </div>
      <div className={styles.conditions}>
        <h2 className={styles.conditionsTitle}>
          Размер скидки за объём закупок от оптовой цены
        </h2>
        <div className={styles.conditionsTable}>
          <table>
            <thead>
              <tr>
                <th>Среднемесячный оборот клиента</th>
                <th>Условия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Менее 30 000 ₽</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>От 30 000 до 80 000 ₽</td>
                <td>-1%</td>
              </tr>
              <tr>
                <td>От 80 000 до 150 000 ₽</td>
                <td>-2%</td>
              </tr>
              <tr>
                <td>От 150 000 до 200 000 ₽</td>
                <td>-3%</td>
              </tr>
              <tr>
                <td>От 200 000 до 300 000 ₽</td>
                <td>-4%</td>
              </tr>
              <tr>
                <td>Свыше 300 000 ₽</td>
                <td>Индивидуально</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.conditionsRemark}>
          На продукцию поставляемую АО «Лада-Имидж» и шины скидки не действуют.
          Данная скидка не распространяется на акционные товары и товары,
          продаваемые по спец. условиям. Список таких товаров и условия можно
          узнать у вашего менеджера.
        </div>
      </div>
      <div className={styles.conditions}>
        <h2 className={styles.conditionsTitle}>
          Выбор клиентом условий расчётов за заказ
        </h2>
        <div className={styles.conditionsTable}>
          <table>
            <thead>
              <tr>
                <th>№ П/П</th>
                <th>Вид оплаты</th>
                <th>Условия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Предоплата 100% за наличный расчет</td>
                <td>-3%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Предоплата 100%</td>
                <td>-2%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Предоплата 50% или оплата по факту</td>
                <td>-1%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Отсрочка до 30 дней</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Отсрочка от 31 до 45 дней</td>
                <td>+1%</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Отсрочка от 46 до 60 дней</td>
                <td>+2%</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Отсрочка более 61 дня</td>
                <td>+3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.conditionsRemark}>
          Поставщик вправе изменить скидку при нарушении покупателем сроков
          оплаты.
        </div>
      </div>
      <div className={styles.warning}>
        <Image
          src="/warning.svg"
          className={styles.warningIcon}
          width={32}
          height={32}
          alt=""
        />
        Все скидки суммируются последовательно. Для новых клиентов условия можно
        узнать у вашего менеджера.
      </div>
      <div className={styles.recalculation}>
        <h2 className={styles.recalculationTitle}>Перерасчёт условий</h2>
        <ul className={styles.recalculationList}>
          <li className={styles.recalculationListItem}>
            для активной клиентской базы один раз в 6 месяцев;
          </li>
          <li className={styles.recalculationListItem}>
            при нарушениях договорных условий со стороны клиентов — в любой
            момент;
          </li>
          <li className={styles.recalculationListItem}>
            для новых клиентов по итогам трёх месяцев.
          </li>
        </ul>
      </div>
      <div className={styles.documents}>
        <h2 className={styles.documentsHeading}>
          Необходимые документы для заключения договора
        </h2>
        <ul className={styles.documentsList}>
          <li className={styles.documentsListItem}>
            <File />
            Реквизиты;
          </li>
          <li className={styles.documentsListItem}>
            <File />
            Копия решения о назначении директора или доверенность;
          </li>
          <li className={styles.documentsListItem}>
            <File />
            Список учредителей, если есть, и после перерегистрации;
          </li>
          <li className={styles.documentsListItem}>
            <File />
            1, 2 лист копии устава.
          </li>
        </ul>
      </div>
    </div>
  );
}
