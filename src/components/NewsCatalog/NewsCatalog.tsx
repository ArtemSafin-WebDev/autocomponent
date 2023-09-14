import { NewsCard } from "@/types/api";
import Pagination from "../Pagination/Pagination";
import SimpleNav from "../SimpleNav/SimpleNav";
import styles from "./newsCatalog.module.scss";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "@/icons/ArrowRight";

interface NewsCatalogProps {
  items: NewsCard[];
}

export default function NewsCatalog({ items }: NewsCatalogProps) {
  return (
    <div className={styles.newsCatalog}>
      <h1 className={styles.heading}>Новости</h1>
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
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.imageWrapper}>
                  <Image src={item.src} className={styles.image} alt="" fill />
                </div>
                <div className={styles.text}>{item.text}</div>
                <div className={styles.link}>
                  Подбробнее
                  <ArrowRight />
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
