import styles from "./partCard.module.scss";
import Link from "next/link";
import Image from "next/image";

type PartCardProps = {
  href: string;
  src?: string;
  title: string;
  alt?: string;
};

export default function PartCard({
  src,
  title,
  href,
  alt = "",
}: PartCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {src ? (
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          width={133}
          height={172}
        />
      ) : null}
    </Link>
  );
}
