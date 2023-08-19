"use client";

import Camera from "@/icons/Camera";
import styles from "./photoPreview.module.scss";
import Image from "next/image";

interface PhotoPreviewProps {
  src: string;
  alt?: string;
  isLastChild?: boolean
}

export default function PhotoPreview({ src, alt = "", isLastChild }: PhotoPreviewProps) {
  return (
    <div className={styles.photoPreview}>
      <button className={styles.btn}>
        <Camera />
      </button>
      <div className={isLastChild ? styles.dropdown_last : styles.dropdown}>
        <div className={styles.dropdownInner}>
          <div className={styles.photoWrapper}>
            <Image src={src} fill alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}
