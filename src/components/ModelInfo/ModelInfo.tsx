import InfoIcon from "@/icons/Info";
import styles from "./modelInfo.module.scss";

type ModelInfoProps = {
  items: Array<{
    id: number | string;
    key: string;
    value: string;
  }>;
};

export default function ModelInfo({ items }: ModelInfoProps) {
  return (
    <div className={styles.modelInfo}>
      <InfoIcon />
      <div className={styles.dropdown}>
        <div className={styles.dropdownInner}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li className={styles.listItem} key={item.id}>
                <div className={styles.card}>
                  <div className={styles.key}>{item.key}</div>
                  <div className={styles.value}>{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
