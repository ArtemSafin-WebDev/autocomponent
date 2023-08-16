"use client"
import styles from './catalog.module.scss'
import structure from "@/assets/images/structure.png";
import {usePathname} from "next/navigation";
import Link from "next/link"
import Image from "next/image";

const dataImages = [
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
  {img: structure, title: "Подача дополнительного воздуха", link: "node"},
]


export default function CatalogsAutoItems() {
  const pathName = usePathname()
  return (
    <div className={styles.items}>
      <ul className={styles.items__container}>
          {dataImages?.map((card) => (
            <li>
              <Link className={styles.items__card} href={`${pathName}/${card?.link}`}>
                <h3 className={styles.items__cardTitle}>{card?.title}</h3>
                <Image src={card?.img} alt={"test"} className={styles.items__cardImage}></Image>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}