import styles from "./carsCatalogCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface CarsCatalogCardProps {
  title: string;
  image?: string;
  year?: string;
}

export default function CarsCatalogCard({
  title,
  image,
  year,
}: CarsCatalogCardProps) {
  return (
    <Link href="/" className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <Image src={image} fill alt="" />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {year && <div className={styles.year}>{year}</div>}
    </Link>
  );
}
