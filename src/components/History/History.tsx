import styles from "./history.module.scss";

interface HistoryProps {
  heading: string;
  items: Array<{
    id: number | string;
    year: number;
    text: string;
  }>;
}

export default function History({ heading, items }: HistoryProps) {
  const numberOfPlaceholderCards = items.length % 3 > 0 ? 3 - (13 % 3) : 0;

  console.log("Number of placeholder", numberOfPlaceholderCards);
  return (
    <div className={styles.history}>
      <h2 className={styles.heading}>{heading}</h2>
      {items?.length ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <div className={styles.card}>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            </li>
          ))}

          {numberOfPlaceholderCards > 0
            ? [...Array(numberOfPlaceholderCards)].map((item) => (
                <div className={styles.placeholderCard}></div>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
}
