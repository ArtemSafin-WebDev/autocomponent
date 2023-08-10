"use client"
import styles from "./catalogLinks.module.scss"
import Link from "next/link";
import {useEffect, useState} from "react";


interface ICatalogLinks {
  data: any;
  title: string;
  type: string;
}

export default function CatalogLinks({title, data, type}: ICatalogLinks) {
  const [linksData, setLinksData] = useState<any>()
  const [isActive, setIsActive] = useState<any[]>([])

  useEffect(() => {
    let map = new Map()
    let finalFilteredData: any = []
    data.map((item: any) => {
      Object.entries((item)).map((value: any) => {
        if(item) setIsActive(prevState => [...prevState, value[1].length > 0])
        finalFilteredData = map.set(value[0], value[1].filter((crnBlock: any) => crnBlock.type === type))
      })
    })
    setLinksData(Array.from(finalFilteredData, ([key, value]) => ({ [key]: value,})))
  }, [data, setLinksData])
  console.log(isActive)

  return (
    <>
    <div className={styles.catalogTable__table}>
      <h5 className={styles.catalogTable__titleTable}>{title}</h5>
      <div className={styles.catalogTable__container}>
        {linksData?.map((section: any) => (
          Object.entries(section).map(([key, value]: any) => (
              value.length !== 0 &&  <div className={styles.catalogTable__item} key={key}>
                <span className={styles.catalogTable__section}>{key}</span>
                <div className={styles.catalogTable__links}>
                  {value.map((item: any, ind: number) => (
                    <Link href={`/catalogs/${item.name.toLowerCase()}`} key={ind}
                          className={styles.catalogTable__link}>{item.name}</Link>
                  ))}
                </div>
              </div>
          ))
        ))}
      </div>
    </div>
    </>
  )
}