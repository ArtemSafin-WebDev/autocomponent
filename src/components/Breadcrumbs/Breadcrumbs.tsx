import Link from "next/link";
import styles from "./breadcrumbs.module.scss";

interface BreadcrumbsLink {
  id: number;
  href: string;
  title: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  links: BreadcrumbsLink[];
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  if (!(links && links.length)) return null;
  return (
    <div className={styles.breadcrumbs}>
      {links.map((link) => (
        <Link
          href={link.href}
          className={`${styles.link} ${link.active ? styles.linkActive : ""}`}
          key={link.id}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export type { BreadcrumbsLink };
