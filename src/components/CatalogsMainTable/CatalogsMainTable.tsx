"use client"
import styles from "./CatalogsMain.module.scss"
import Link from "next/link";
import {data} from "./data"
import Image from "next/image";

export default function CatalogsMainTable() {
  return (
    <div className={styles.catalogsMain}>
      <ul className={styles.catalogsMain__container}>
        {data?.map((card) => (
          <li className={styles.catalogsMain__card}>
            <Image src={card.img} alt={"icon"}/>
            <div className={styles.catalogsMain__cardBlock}>
              <h2 className={styles.catalogsMain__cardTitle}>{card?.title}</h2>
              <div className={styles.catalogsMain__cardLinks}>
                {card.links.map((link) => (
                  <Link className={styles.catalogsMain__link} href={`${link.link}`}>{link?.text}</Link>
                ))}

                {card?.linkSeeAll && <Link className={styles.catalogsMain__linkSeeAll}
                       href={card?.linkSeeAll.link}>{card?.linkSeeAll.text}</Link>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
