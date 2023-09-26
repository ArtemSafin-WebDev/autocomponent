"use client";

import { CompanySidebarBlock } from "@/types/api";
import styles from "./companySidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanySidebarProps {
  items: CompanySidebarBlock[];
}

export default function CompanySidebar({ items }: CompanySidebarProps) {
  const pathname = usePathname();
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div className={styles.block}>
          {item.title ? (
            <h3 className={styles.blockTitle}>{item.title}</h3>
          ) : null}
          <ul className={styles.list}>
            {item.links.map((link) => (
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
