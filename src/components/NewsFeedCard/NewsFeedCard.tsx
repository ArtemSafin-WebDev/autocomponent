import { NewsFeedCard, NewsFeedCategory } from "@/types/api";
import styles from "./newsFeedCard.module.scss";
import Link from "next/link";

interface NewsFeedCardProps {
  card: NewsFeedCard;
}

export default function NewsFeedCard({ card }: NewsFeedCardProps) {
  let categoryClass = "";
  if (card.category === NewsFeedCategory.New) {
    categoryClass = styles.categoryGreen;
  } else if (card.category === NewsFeedCategory.News) {
    categoryClass = styles.categoryOrange;
  }

  return (
    <Link className={styles.card} href="/">
      <div className={styles.topRow}>
        <div className={styles.datetime}>{card.datetime}</div>
        <div className={`${styles.category} ${categoryClass}`}>
          {card.category}
        </div>
      </div>
      <h3 className={styles.title}>{card.title}</h3>
      <div className={styles.desc}>{card.shortDesc}</div>
    </Link>
  );
}
