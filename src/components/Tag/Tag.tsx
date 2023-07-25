"use client"

import styles from "./tag.module.scss"
import Image from "next/image";
import closeIcon from "@/assets/images/close.svg"
import {ITag} from "@/components/Tag/types";

export default function Tag({count, text}: ITag) {
  return (
    <>
      {count &&
      <span className={styles.tag}>
        <span>{count} категории</span>
        <button>
          <Image src={closeIcon} alt="icon" className={styles.tag__image}/>
        </button>
      </span>}
      <span className={styles.tag}>
        <span>{text}</span>
        <button>
          <Image src={closeIcon} alt="icon" className={styles.tag__image}/>
        </button>
      </span>
    </>
  );
};
