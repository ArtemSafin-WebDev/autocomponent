"use client";
import styles from "./goodsFilters.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function GoodsFiltersCategoryBtn({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <Link className={styles.categoryBtn} href="/">
      <Image
        src={icon}
        className={styles.categoryIcon}
        width={24}
        height={24}
        alt=""
      />
      {name}
    </Link>
  );
}
