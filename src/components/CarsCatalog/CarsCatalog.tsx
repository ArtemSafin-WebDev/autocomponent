import styles from "./carsCatalog.module.scss";
import CarsCatalogCard from "../CarsCatalogCard/CarsCatalogCard";
import { CarsCatalogData } from "@/types/api";

interface CarsCatalogProps {
  data: CarsCatalogData;
}

export default async function CarsCatalog({ data }: CarsCatalogProps) {
  const { title, items } = data;
  return (
    <div className={styles.catalog}>
      <h1 className={styles.heading}>{title}</h1>
      <ul className={styles.list}>
        {items.map((item) => (
          <CarsCatalogCard
            key={item.id}
            title={item.title}
            image={item.image}
            year={item.year}
            href={item.href}
          />
        ))}
      </ul>
    </div>
  );
}
