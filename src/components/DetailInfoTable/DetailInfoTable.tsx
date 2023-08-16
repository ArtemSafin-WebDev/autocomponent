"use client"

import styles from "./detail.module.scss"
import Tooltip from "@/components/Tooltip/Tooltip";
import arrowBlue from "@/assets/images/arrow-blue.svg"
import Link from "next/link";
import Image from "next/image";

const data = [
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
  {oem: "04E121600BD", name: "Винт с плоской головкой и внутренним torx", tooltipText: "Какой то текст"},
]

export default function DetailInfoTable() {
 return (
   <div className={styles.infoTable}>
      <div className={styles.infoTable__upper}>
        <h5>№</h5>
        <h5>OEM</h5>
        <h5>Наименование</h5>
        <h5></h5>
      </div>
     <ul className={styles.infoTable__table}>
       {data?.map((item, idx) => (
         <li>
           <p>{idx}</p>
           <p>{item?.oem}</p>
           <span>{item?.name}<Tooltip text={item?.tooltipText}/></span>
           <Link href={"/#"} className={styles.infoTable__link}>Цены и аналоги<Image src={arrowBlue} alt={"icon"}/></Link>
         </li>
       ))}
     </ul>
   </div>
 )
}