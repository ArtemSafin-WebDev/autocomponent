import InfoIcon from "@/icons/Info";
import styles from "./tooltip.module.scss";

export default function Tooltip({
  text,
  small,
  style
}: {
  text: string;
  small?: boolean;
  style?: {[keyof: string]: string}
}) {
  return (
    <span style={style} className={`${styles.tooltip} ${small ? styles.small : ""}`}>
      <InfoIcon />
      <span className={styles.dropdown}>
        <span className={styles.dropdownInner}>{text}</span>
      </span>
    </span>
  );
}
