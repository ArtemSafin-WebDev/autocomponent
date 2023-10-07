import styles from "./mission.module.scss";
import Image from "next/image";

interface MissionProps {
  heading?: string;
  text?: string;
  cards?: Array<{
    id: number;
    src: string;
    text: string;
  }>;
}

export default function Mission({ heading, text, cards }: MissionProps) {
  return (
    <div className={styles.mission}>
      {heading ? <h2 className={styles.missionHeading}>{heading}</h2> : null}
      {text ? <div className={styles.missionHeadingText}>{text}</div> : null}
      {cards?.length ? (
        <ul className={styles.missionList}>
          {cards.map((item) => (
            <li className={styles.missionListItem} key={item.id}>
              <div className={styles.missionCard}>
                <Image
                  src={item.src}
                  width={46}
                  height={46}
                  alt=""
                  className={styles.missionCardIcon}
                />
                <h3 className={styles.missionCardTitle}>{item.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
