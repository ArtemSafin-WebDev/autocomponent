import PartCard from "../PartCard/PartCard";
import styles from "./partCatalog.module.scss";

type PartCatalogProps = {
  items: Array<{
    href: string;
    src?: string;
    title: string;
    alt?: string;
  }>;
};

export default function PartCatalog({ items }: PartCatalogProps) {
  return (
    <div className={styles.catalog}>
      <ul className={styles.list}>
        {items.map((item) => (
          <PartCard src={item.src} title={item.title} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
