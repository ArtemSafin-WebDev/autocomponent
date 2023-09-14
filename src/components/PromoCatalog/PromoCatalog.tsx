import { PromoCard } from "@/types/api";
import styles from "./promoCatalog.module.scss";
import SimpleNav from "../SimpleNav/SimpleNav";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";

interface PromoCatalogProps {
  items: PromoCard[];
}

export default function PromoCatalog({ items }: PromoCatalogProps) {
  return (
    <div className={styles.promoCatalog}>
      <h1 className={styles.heading}>Акции</h1>
      <SimpleNav
        links={[
          {
            href: "/promo",
            title: "Акции",
          },
          {
            href: "/news",
            title: "Новости",
          },
          {
            href: "/recent",
            title: "Новинки",
          },
        ]}
      />
      {items?.length ? (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <Link href={item.href} className={styles.card}>
                <Image src={item.src} fill alt="" className={styles.image} />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className={styles.paginationWrapper}>
        <Pagination pagesCount={6} />
      </div>
    </div>
  );
}
