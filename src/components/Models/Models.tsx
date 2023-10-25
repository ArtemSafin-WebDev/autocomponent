import styles from "./models.module.scss";
import Link from "next/link";

export default function Models() {
  return (
    <div className={styles.models}>
      <h1 className={styles.heading}>AUDI A4 Avant (8E5, B6)</h1>
      <div className={styles.modelsTable}>
        <table>
          <thead>
            <tr>
              <th>Модификация</th>
              <th>Модель двигателя</th>
              <th>Тип двигателя</th>
              <th>Объём</th>
              <th>Мощность</th>
              <th>Привод</th>
              <th>Тип кузова</th>
              <th>Год выпуска</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14)].map((_item, itemIndex) => {
              return (
                <tr key={itemIndex}>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      1.8 TDI quattro
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      CHZD
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      Бензиновый двигатель
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      1.8 л
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      400 л. с.
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      Привод на передние колеса
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      Наклонная задняя часть
                    </Link>
                  </td>
                  <td>
                    <Link href={"/"} className={styles.link}>
                      2009
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
