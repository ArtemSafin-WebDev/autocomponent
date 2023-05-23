"use client";

import { NewsFeedData } from "@/types/api";
import styles from "./newsFeed.module.scss";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import NewsFeedList from "../NewsFeedList/NewsFeedList";
import moreArrow from "@/assets/images/more-arrow.svg";
import Link from "next/link";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";

interface NewsFeedProps {
  data: NewsFeedData;
}

export default function NewsFeed({ data }: NewsFeedProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const currentCategory = useMemo(() => {
    return data?.categories?.find((category) => category.id === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (data?.categories?.length) {
      const firstCategoryId = data.categories[0].id;
      setActiveCategory(firstCategoryId);
    }
  }, []);

  if (!data?.categories?.length) return null;
  return (
    <div className={styles.newsFeed}>
      <h2 className={styles.heading}>Последние события</h2>
      <div className={styles.nav}>
        {data.categories?.map((category) => (
          <button
            className={`${styles.navBtn} ${
              category.id === activeCategory ? styles.navBtnActive : ""
            }`}
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.title}
            {category.id === activeCategory ? (
              <motion.span
                className={styles.underline}
                layoutId="underline"
              ></motion.span>
            ) : null}
          </button>
        ))}
      </div>
      {currentCategory ? (
        <NewsFeedList items={currentCategory.items} />
      ) : (
        <NewsFeedList items={data.categories[0].items} />
      )}
      <motion.div className={styles.linkWrapper} layout>
        <Link href="/" className={styles.link}>
          Все события
          <EmbedSVG src={moreArrow.src} />
        </Link>
      </motion.div>
    </div>
  );
}
