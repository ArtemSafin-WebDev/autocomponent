"use client"
import styles from "./catalogLinks.module.scss"
import Link from "next/link";


interface ICatalogLinks {
  data: any;
  title: string;
}

export default function CatalogLinks({title, data}: ICatalogLinks) {
  return (
    <div className={styles.catalogTable__table}>
    <h5 className={styles.catalogTable__titleTable}>{title}</h5>
    <div className={styles.catalogTable__container}>
      {data?.map((section: any) => {
        {return Object.entries(section).map(([key, value]: any) => (
          <div className={styles.catalogTable__item} key={key}>
            {value.length !== 0 && <span className={styles.catalogTable__section}>{key}</span>}
            <div className={styles.catalogTable__links}>
              {value.map((item: any, ind: number) => (
                <Link href={`/catalogs/${item.name.toLowerCase()}`} key={ind}
                      className={styles.catalogTable__link}>{item.name}</Link>
              ))}
            </div>
          </div>
        ))}
      })}
    </div>
    </div>
  )
}