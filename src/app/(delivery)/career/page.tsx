import styles from "./career.module.scss";

export const metadata = {
  title: "Автокомпонент - Вакансии",
  description: "",
};

export default async function CareerPage() {
  return (
    <div className={styles.career}>
      <h1 className={styles.heading}>Вакансии</h1>
      <div className={styles.textContent}>
        Компания Автокомпонент является дилером ведущих отечественных и мировых
        производителей запчастей для отечественных авто и иномарок. В рамках
        роста и развития нашей компании, мы открываем несколько дополнительных
        вакансий. С актуальным списком всех вакантных предложений вы можете
        ознакомиться по <a href="#">ссылке на сайте hh.ru.</a> Мы ждём ваши
        резюме: <a href="mailto:personal@td-auto.ru">personal@td-auto.ru</a>
      </div>
    </div>
  );
}
