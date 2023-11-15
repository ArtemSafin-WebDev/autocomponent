"use client";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./pagination.module.scss";
import Link from "next/link";
import { useCallback } from "react";
import PaginationArrow from "@/icons/PaginationArrow";

interface PaginationProps {
  pagesCount: number;
}

export default function Pagination({ pagesCount = 1 }: PaginationProps) {
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

  console.log("Pages count", pagesCount);

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {[...Array(pagesCount)].map((e, i) => {
          return (
            <li key={i} className={styles.listItem}>
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
            </li>
          );
        })}
        {currentPage < pagesCount ? (
          <li className={styles.listItem} key="next">
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
          </li>
        ) : null}
      </ul>
    </div>
  );
}
