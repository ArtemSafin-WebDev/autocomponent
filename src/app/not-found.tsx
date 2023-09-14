import styles from "./notFound.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image
        src={"/not-found.webp"}
        alt={"Страница не найдена"}
        width={914}
        height={400}
        className={styles.image}
      />
      <h1 className={styles.heading}>Страница не найдена</h1>
      <div className={styles.text}>
        Неправильно набран адрес или такой страницы больше не
        существует.Воспользуйтесь нашими каталогами или поиском для подбора
        товара.
      </div>
      <Link href="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
}
