import styles from "./ourBrands.module.scss";
import Link from "next/link";

interface OurBrandsProps {
  heading: string;
  content: string;
}

export default function OurBrands({ heading, content }: OurBrandsProps) {
  return (
    <div className={styles.ourBrands}>
      <h1 className={styles.heading}>{heading}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
      <Link href="/brand-search" className={styles.link}>
        Перейти в каталог
      </Link>
    </div>
  );
}
