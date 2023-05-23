import { HomeLink } from "@/types/api";
import styles from "./homeLinks.module.scss";
import Link from "next/link";
import moreArrow from "@/assets/images/more-arrow.svg";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";

console.log(moreArrow);

interface HomeLinksProps {
  links: HomeLink[];
}

export default function HomeLinks({ links }: HomeLinksProps) {
  if (!(links && links.length)) return null;
  return (
    <div className={styles.homeLinks}>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.list}>
            {links.map((link) => (
              <li className={styles.listItem} key={link.id}>
                <Link href={link.href} className={styles.card}>
                  <div className={styles.link}>
                    {link.title}
                    <EmbedSVG src={moreArrow.src} />
                  </div>
                  <div className={styles.desc}>{link.desc}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
