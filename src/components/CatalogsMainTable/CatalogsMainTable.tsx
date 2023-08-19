"use client"
import {useCallback, useEffect, useState} from "react";
import styles from "./CatalogsMain.module.scss"
import Link from "next/link";
import {catalogLinks, TCatalogLinks} from "@/components/CatalogsMainTable/data";
import Image from "next/image";

export default function CatalogsMainTable() {
  const [links, setLinks] = useState<[] | TCatalogLinks>([])

  useEffect(() => {
    setLinks(catalogLinks)
  }, [])

  const handleOpenCloseList = (id: number) => {
    const toggleIsOpened = (id: number, prevLinks: any) => {
      return prevLinks?.map((item: any) => {
        if(item?.linkSeeAll !== undefined) {
          if(item?.id === id) {
            return item.linkSeeAll.isOpened = !item.linkSeeAll.isOpened
          }
        }
      })
    }

    setLinks((prevValue) => prevValue.filter((link) => {
      return link?.id === id ? toggleIsOpened(link.id, prevValue) : link
    }))
  }

  return (
    <div className={styles.catalogsMain}>
      <ul className={styles.catalogsMain__container}>
        {links?.map((card, index) => (
          <li className={styles.catalogsMain__card} key={index}>
            <Image src={card?.img} alt={"icon"}/>
            <div className={styles.catalogsMain__cardBlock}>
              <h2 className={styles.catalogsMain__cardTitle}>{card?.title}</h2>
              <div className={styles.catalogsMain__cardLinks}>
                <div
                  className={card?.linkSeeAll?.isOpened ? styles.catalogsMain__wrapperLink_active : styles.catalogsMain__wrapperLink}>
                  {card?.links?.map((link, index) => (
                    <Link key={index} className={styles.catalogsMain__link} href={`${link.link}`}>{link?.text}</Link>
                  ))}
                </div>
                {card.linkSeeAll && <button
                  onClick={() => handleOpenCloseList(card.id)}
                  className={styles.catalogsMain__linkSeeAll}>
                  {!card.linkSeeAll?.isOpened ? "Показать все" : "Скрыть все"}
                </button>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
