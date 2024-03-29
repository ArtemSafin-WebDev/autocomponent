import styles from "./return.module.scss";

export const metadata = {
  title: "Автокомпонент - Возврат",
  description: "",
};

export default function ReturnPage() {
  return (
    <div className={styles.rules}>
      <h1 className={styles.heading}>Возврат</h1>
      <div className={styles.textContent}>
        <ol>
          <li>
            <p>
              При получении Товара на складе фирмы покупатель обязан проверить:
            </p>
            <ul>
              <li>
                соответствие товара накладной по наименованию и количеству;
              </li>
              <li>
                отсутствие явных механических повреждений, особо обратив
                внимание на дорогостоящий товар, изделия из пластмассы и стекла,
                целостность упаковки, особенно автохимии. В случае обнаружения,
                такой товар должен быть забракован покупателем и возвращён
                при приемо-сдаче;
              </li>
              <li>наличие гарантийных талонов на товар;</li>
              <li>
                претензии по пересортице принимаются в течении 3-х рабочих дней
                со дня получения товара.
              </li>
            </ul>
          </li>
          <li>
            <p>
              При поставке товара экспедитором (водителем) фирмы, товар
              принимается покупателем в присутствии экспедитора с соблюдением
              пункта №1.
            </p>
          </li>
          <li>
            <p>
              При возврате бракованного товара покупатель обязан предоставить:
            </p>
            <ul>
              <li>
                бракованный товар в комплекте (комплектующие, документы,
                упаковка);
              </li>
              <li>
                <p>документы:</p>
                <a href="#" download="">
                  Заявление покупателя о браке (в заявлении указывается
                  накладная по которой получен товар, адрес, контактный телефон
                  СТО, а также Ф.И.О. специалиста проводившего данный ремонт).
                </a>
                <a href="#" download="">
                  Копию накладной, по которой был получен товар.
                </a>
                <a href="#" download="">
                  Наряд-заказ (договор) автосервиса на проведение работ по
                  установке детали (автозапчасти).
                </a>
                <a href="#" download="">
                  Копию сертификата СТО на производство данного вида работ.
                </a>
                <a href="#" download="">
                  Заполненный гарантийный талон (если он прилагался).
                </a>
                <a href="#" download="">
                  Акт дефектации (рекламационный акт) с описанием неисправности.
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Бракованный товар сдаётся покупателем в отдел сервиса лично
              или через водителя, уведомив менеджера. Товар принимается
              на временное хранение, до принятия решения о принятии брака
              или возврата его покупателю с указанием причины возврата. Вопрос
              о принятии или возврате брака рассматривается в течение 7 дней,
              если не требуется отправка товара на завод производитель.
              Если товар признается бракованным, то проводится его замена
              на новый, в случае отсутствия данного товара на складе поставщика
              покупателю возмещается стоимость бракованного товара.
            </p>
            <p>
              Претензия по скрытым дефектам принимаются в течение гарантийного
              срока, установленного производителем товара. О своих претензиях
              покупатель уведомляет по телефону, факсу и электронной почте
              поставщика.
            </p>
          </li>
          <li>
            <p>
              Возврат бракованного товара может производиться в течении 6
              месяцев с даты получения товара, но не более 10 месяцев с даты
              выпуска товара.
            </p>
          </li>
          <li>
            <p>
              Товары, имеющие гарантийные мастерские, сдаются покупателем для
              выбраковки в эти мастерские.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
