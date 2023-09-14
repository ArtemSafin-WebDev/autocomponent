"use client";

import styles from "./simpleNav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SimpleNavProps {
  links: Array<{
    href: string;
    title: string;
  }>;
}

export default function SimpleNav({ links }: SimpleNavProps) {
  const pathname = usePathname();

  if (!links?.length) return null;
  return (
    <div className={styles.simpleNav}>
      <ul className={styles.list}>
        {links.map((link, linkIndex) => (
          <li className={styles.listItem} key={linkIndex}>
            <Link
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
              href={link.href}
            >
              {link.title}
              {pathname === link.href ? (
                <motion.span
                  className={styles.underline}
                  layoutId="underline"
                ></motion.span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
