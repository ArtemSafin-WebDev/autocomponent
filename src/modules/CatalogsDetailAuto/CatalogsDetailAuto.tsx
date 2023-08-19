"use client"
import styles from "./catalog.module.scss"
import Tooltip from "@/components/Tooltip/Tooltip";
import CatalogAutoAside from "@/components/CatalogAutoAside/CatalogAutoAside";
import CatalogsAutoItems from "@/components/CatalogsAutoItems/CatalogsAutoItems";

interface ICatalogsDetailModule {
  id: string
}

export default function CatalogsDetailAuto({id}: ICatalogsDetailModule) {

  return (
    <section className={styles.catalogDetail}>
      <div className={styles.catalogDetail__titleWrapper}>
        <h3 className={styles.catalogDetail__title}>Audi A3 Cabrio quattro 2.0</h3>
        <Tooltip>
          <ul className={styles.catalogDetail__info}>
            <li className={styles.catalogDetail__infoList}>
              <h5>Марка</h5>
              <p>AUDI</p>
            </li>
            <li className={styles.catalogDetail__infoList}>
              <h5>Модель</h5>
              <p>A3 Cabrio quattro 2.0</p>
            </li>
            <li className={styles.catalogDetail__infoList}>
              <h5>VIN</h5>
              <p>123214341353145</p>
            </li>
            <li className={styles.catalogDetail__infoList}>
              <h5>Двигатель / КПП</h5>
              <p>123214341353145</p>
            </li>
            <li className={styles.catalogDetail__infoList}>
              <h5>Для региона</h5>
              <p>Европа</p>
            </li>
          </ul>
        </Tooltip>
      </div>
      <div className={styles.catalogDetail__container}>
        <CatalogAutoAside/>
        <CatalogsAutoItems/>
      </div>
    </section>
  )
}