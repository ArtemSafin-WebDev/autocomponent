import InfoIcon from "@/icons/Info";
import styles from "./tooltip.module.scss";

export default function Tooltip({
  text,
  small,
}: {
  text: string;
  small?: boolean;
}) {
  return (
    <span className={`${styles.tooltip} ${small ? styles.small : ""}`}>
      <InfoIcon />
      <span className={styles.dropdown}>
        <span className={styles.dropdownInner}>{text}</span>
      </span>
    </span>
  );
}
