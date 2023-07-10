import { HomeCatalogItem } from "@/types/api";
import styles from "./homeCatalog.module.scss";
import Link from "next/link";
import Image from "next/image";

interface HomeCatalogProps {
  items: HomeCatalogItem[];
}

export default function HomeCatalog({ items }: HomeCatalogProps) {
  if (!(items && items.length)) return null;

  return (
    <div className={styles.homeCatalog}>
      <h2 className={styles.heading}>Каталог автотоваров</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <Link href={item.href} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image src={item.icon} alt="" className={styles.icon} fill />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
