import Link from "next/link";
import styles from "./breadcrumbs.module.scss";

interface BreadcrumbsProps {
  links: Array<{
    id: number;
    href: string;
    title: string;
    active?: boolean;
  }>;
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  if (!(links && links.length)) return null;
  return (
    <div className={styles.breadcrumbs}>
      {links.map((link) => (
        <Link
          href={link.href}
          className={`${styles.link} ${link.active ? styles.linkActive : ""}`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
