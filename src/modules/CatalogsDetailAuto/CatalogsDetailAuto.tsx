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
        <Tooltip text={"some text"}/>
      </div>
      <div className={styles.catalogDetail__container}>
        <CatalogAutoAside/>
        <CatalogsAutoItems/>
      </div>
    </section>
  )
}