import styles from "./aboutImageBlock.module.scss";
import Image from "next/image";

interface AboutImageBlockProps {
  src: string;
  text?: string;
}

export default function AboutImageBlock({ src, text }: AboutImageBlockProps) {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.imageBlockBg}>
        <Image src={src} fill alt="" className={styles.imageBlockImage} />
      </div>
      <div className={styles.imageBlockContent}>{text}</div>
    </div>
  );
}
