import Link from "next/link";
import styles from "./headerItem.module.scss";
import dotIcon from "@/assets/images/in-stock.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";

interface HeaderItemProps {
  title: string;
  href: string;
  hasDotIcon?: boolean;
}

export default function HeaderItem({
  title,
  href,
  hasDotIcon,
}: HeaderItemProps) {
  return (
    <Link href={href} className={styles.link}>
      {hasDotIcon ? <EmbedSVG src={dotIcon.src} /> : null}
      {title}
    </Link>
  );
}
