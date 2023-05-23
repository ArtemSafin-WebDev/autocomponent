import Link from "next/link";
import styles from "./homeCard.module.scss";
import Image from "next/image";
import moreArrow from "@/assets/images/more-arrow.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { HomeCard } from "@/types/api";

interface HomeCardProps {
  card: HomeCard;
}

export default function HomeCard({
  card: { title, src, href, linkText },
}: HomeCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <Image
        src={src}
        alt=""
        width={200}
        height={200}
        className={styles.image}
      />
      <Link href={href} className={styles.link}>
        {linkText}
        <EmbedSVG src={moreArrow.src} />
      </Link>
    </div>
  );
}
