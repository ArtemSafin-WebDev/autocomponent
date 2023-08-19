import InfoIcon from "@/icons/Info";
import styles from "./tooltip.module.scss";
import {ReactNode} from "react";

export default function Tooltip({
  text,
  small,
  style,
  children
}: {
  text?: string;
  small?: boolean;
  style?: {[keyof: string]: string};
  children?: ReactNode
}) {
  return (
    <span style={style} className={`${styles.tooltip} ${small ? styles.small : ""}`}>
      <InfoIcon />
      <span className={styles.dropdown}>
        {text && <span className={styles.dropdownInner}>{text}</span>}
        {children && <div className={styles.dropdownInner}>{children}</div>}
      </span>
    </span>
  );
}
