import { RecentCard } from "@/types/api";
import styles from "./recentCatalog.module.scss";
import SimpleNav from "../SimpleNav/SimpleNav";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import Download from "@/icons/Download";

interface RecentCatalogProps {
  items: RecentCard[];
}

export default function RecentCatalog({ items }: RecentCatalogProps) {
  return (
    <div className={styles.recentCatalog}>
      <h1 className={styles.heading}>Новинки</h1>
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
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.iconUrl}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                </div>
                <div className={styles.link}>
                  <Download />
                  {item.btnText}
                </div>
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
