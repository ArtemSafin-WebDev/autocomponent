"use client"
import styles from "./detail.module.scss"
import DetailInfoImage from "@/components/DetailInfoImage/DetailInfoImage";
import DetailInfoTable from "@/components/DetailInfoTable/DetailInfoTable";


interface ICatalogsDetailModule {
  id: string
}

export default function DetailInfoAuto({id}: ICatalogsDetailModule) {

  return (
    <section className={styles.detailInfo}>
      <h2 className={styles.detailInfo__title}>Узел насос системы охлаждения термостат</h2>
      <p className={styles.detailInfo__text}>Насос системы охлаждения; 1,4 л.; ДВС Термостат</p>
      <div className={styles.detailInfo__container}>
        <DetailInfoImage/>
        <DetailInfoTable/>
        <div></div>
      </div>
    </section>
  )
}