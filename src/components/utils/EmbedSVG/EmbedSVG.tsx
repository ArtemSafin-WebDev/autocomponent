"use client";

import { ReactSVG } from "react-svg";
import styles from "./embedSVG.module.scss";

export default function EmbedSVG({ src }: { src: string }) {
  return <ReactSVG src={src} wrapper="span" className={styles.embedSvg} />;
}
