import styles from "./rules.module.scss";

export const metadata = {
  title: "Автокомпонент - Правила регистрации",
  description: "",
};

export default function RulesPage() {
  return (
    <div className={styles.rules}>
      <h1 className={styles.heading}>Правила регистрации</h1>
      <div className={styles.textContent}>
        <h2>Уважаемые клиенты!</h2>
        <p>
          Мы предлагаем своим клиентам только качественные автозапчасти
          и автоаксессуары ведущих отечественных и зарубежных производителей,
          доставку запчастей (включая междугородние и международные поставки),
          квалифицированную помощь персонала, рекламную поддержку, удобный
          график работы и гибкую систему скидок, учитывающую индивидуальность
          каждого клиента.
        </p>
        <p>С помощью нашего интернет-портала вы можете:</p>
        <ul>
          <li>
            получить актуальный прайс-лист в соответствии с вашими условиями
            работы;
          </li>
          <li>оформить он-лайн заказ;</li>
          <li>отследить все этапы прохождения вашего заказа;</li>
          <li>посмотреть историю своих заказов;</li>
          <li>получить информацию о проводимых нашей компанией акциях;</li>
          <li>узнать о состоянии взиморасчетов.</li>
        </ul>
        <h2>
          Правила регистрации на портале <a href="#">td-auto.ru</a>
        </h2>
        <p>
          Чтобы стать клиентом компании Авто-компонент, которая занимается
          оптовой продажей автозапчастей для отечественных авто и иномарок,
          необходимо пройти регистрацию на сайте.
        </p>
        <ol>
          <li>
            В правом верхнем углу нажмите на раздел <b>«Регистрация».</b> Перед
            вами появится таблица для заполнения данных.
          </li>
          <li>
            В графе <b>«Уже работаете с нами?»</b> выберите один из двух
            вариантов:
            <ul>
              <li>
                Для новых клиентов – <b>«Нет, я новый клиент»</b>
              </li>
              <li>
                Для партнёров – <b>«Да, уже работаем»</b>
              </li>
            </ul>
            <p>
              После того, как вы полностью заполнили анкету, ваши данные
              передаются в учётный отдел. Некоторое время вам будет не доступен
              личный кабинет. Дождитесь, когда с вами свяжется ваш персональный
              менеджер для уточнения некоторых деталей и активации учётной
              записи. Также, вы можете ускорить процесс активации, позвонив
              по указанным номерам.
            </p>
            <p>
              После того, как ваша учетная запись будет активирована, вы сможете
              полноценно пользоваться порталом.
            </p>
          </li>
        </ol>
        <h2>Если вы уже являетесь клиентом Авто-Компонент</h2>
        <ul>
          <li>
            Можно получить логин и пароль к личному кабинету у вашего
            персонального менеджера и приступить к оформлению заказа на сайте;
          </li>
          <li>
            Можно самостоятельно зарегистрироваться, заполнив регистрационную
            форму на сайте. После авторизации, вы получите уведомление и сможете
            приступить к работе с заказами.
          </li>
        </ul>
        <h2>Если вы делаете заказ в нашей компании впервые</h2>
        <p>
          Можно самостоятельно зарегистрироваться, заполнив регистрационную
          форму на нашем сайте. Через некоторое время с вами свяжется наш
          менеджер и поможет оформить все необходимые документы. После
          авторизации вы сможете приступить к работе с заказами.
        </p>
      </div>
    </div>
  );
}
