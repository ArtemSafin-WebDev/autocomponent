"use client"
import styles from "./catalogDetail.module.scss"

interface ICatalogDetailTable {
  detailData: any
}

export default function CatalogDetailTable({detailData}: ICatalogDetailTable) {
  return (
    <div className={styles.table}>
      <h2>Выберите автомобиль</h2>
      <div className={styles.table__container}>
        <div className={styles.table__header}>
          <h5 className={styles.table__title}>Название</h5>
          <h5 className={styles.table__title}>Год выпуска</h5>
          <h5 className={styles.table__title}>Рынок</h5>
          <h5 className={styles.table__title}>Код</h5>
          <h5 className={styles.table__title}>Двигатель</h5>
          <h5 className={styles.table__title}>Двигатель</h5>
          <h5 className={styles.table__title}>КП</h5>
        </div>
        <ul className={styles.table__items}>
          {detailData?.map((item: any) => (
            <>
              <li>{item?.name}</li>
              <li>{item?.year}</li>
              <li>{item?.market}</li>
              <li>{item?.code}</li>
              <li>{item?.engine}</li>
              <li>{item?.engineInfo}</li>
              <li>{item?.KP}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}