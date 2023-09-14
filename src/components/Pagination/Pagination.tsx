"use client";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./pagiation.module.scss";
import Link from "next/link";
import { useCallback } from "react";
import PaginationArrow from "@/icons/PaginationArrow";
import { AnimatePresence, motion } from "framer-motion";

interface PaginationProps {
  pagesCount: number;
}

export default function Pagination({ pagesCount }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const currentPage: number = searchParams.has("page")
    ? Number(searchParams.get("page"))
    : 1;

  if (pagesCount === 0) return null;

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        <AnimatePresence initial={false} mode="popLayout">
          {[...Array(pagesCount)].map((e, i) => {
            return (
              <motion.li
                key={i}
                className={styles.listItem}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <Link
                  className={`${styles.link} ${
                    currentPage === i + 1 ? styles.active : ""
                  }`}
                  href={`${pathname}?${createQueryString(
                    "page",
                    (i + 1).toString()
                  )}`}
                  scroll={false}
                >
                  {i + 1}
                </Link>
              </motion.li>
            );
          })}
          {currentPage < pagesCount ? (
            <motion.li
              className={styles.listItem}
              key="next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <Link
                className={styles.button}
                href={`${pathname}?${createQueryString(
                  "page",
                  (currentPage + 1).toString()
                )}`}
                scroll={false}
              >
                <PaginationArrow />
              </Link>
            </motion.li>
          ) : null}
        </AnimatePresence>
      </ul>
    </div>
  );
}
