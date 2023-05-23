import { FooterMenuCategory } from "@/types/api";
import styles from "./footerNav.module.scss";
import Link from "next/link";

interface FooterNavProps {
  footerMenuCategories?: FooterMenuCategory[];
}

export default function FooterNav({ footerMenuCategories }: FooterNavProps) {
  if (!(footerMenuCategories && footerMenuCategories.length)) return null;
  return (
    <ul className={styles.list}>
      {footerMenuCategories.map((category) => (
        <li className={styles.listItem}>
          <Link href={category.href} className={styles.categoryLink}>
            {category.title}
          </Link>
          {category.items?.length && (
            <ul className={styles.submenuList}>
              {category.items.map(({ href, title }) => (
                <li className={styles.submenuListItem}>
                  <Link href={href} className={styles.submenuLink}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
