"use client"
import styles from "./mainCatalog.module.scss"
import CatalogsMainTable from "@/components/CatalogsMainTable/CatalogsMainTable";

export default function MainCatalogModule() {
  return (
    <div className={styles.mainCatalog}>
      <h2 className={styles.mainCatalog__title}>Каталог автотоваров</h2>
      <CatalogsMainTable/>
    </div>
  )
}