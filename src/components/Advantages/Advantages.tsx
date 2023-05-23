import { Advantage } from "@/types/api";
import styles from "./advantages.module.scss";

interface AdvantagesProps {
  advantages?: Advantage[];
}

export default function Advantages({ advantages }: AdvantagesProps) {
  if (!(advantages && advantages.length)) return null;
  return (
    <div className={styles.advantages}>
      <ul className={styles.list}>
        {advantages.map((advantage) => (
          <li className={styles.listItem}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src={advantage.src} alt="" className={styles.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.cardDesc}>{advantage.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
