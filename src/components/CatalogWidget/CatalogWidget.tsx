"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./catalogWidget.module.scss";
import Link from "next/link";
import { HeaderCatalogMenuCategory } from "@/types/api";
import { motion, AnimatePresence } from "framer-motion";
import useOnClickOutside from "@/hooks/useOutsideClick";

interface CatalogWidgetProps {
  headerCatalogCategories?: HeaderCatalogMenuCategory[];
}

export default function CatalogWidget({
  headerCatalogCategories,
}: CatalogWidgetProps) {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const className = `${styles.catalogWidget} ${
    toggle ? styles.catalogWidgetActive : ""
  }`;

  const outsideClickHandler = useCallback(() => setToggle(false), []);

  useOnClickOutside(ref, outsideClickHandler);

  if (!(headerCatalogCategories && headerCatalogCategories.length)) return null;
  return (
    <div className={className} ref={ref}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <span className={styles.cross}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className={styles.btnText}>Каталог</span>
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className={styles.dropdownInner}>
              <div className={styles.dropdownRow}>
                {headerCatalogCategories.map((category) => (
                  <div className={styles.dropdownCol}>
                    <Link
                      href={category.href}
                      className={styles.dropdownCategoryLink}
                    >
                      {category.title}
                    </Link>
                    {category.items && (
                      <ul className={styles.submenuList}>
                        {category.items.map((item) => (
                          <li className={styles.submenuListItem}>
                            <Link
                              href={item.href}
                              className={styles.submenuLink}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
